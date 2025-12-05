import { getConfig } from './config';

export interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    status: number;
}

export class ApiClient {
    private static instance: ApiClient;
    private isRefreshing = false;
    private failedQueue: Array<{
        resolve: (value: any) => void;
        reject: (error: any) => void;
    }> = [];

    private constructor() { }

    public static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    private async processQueue(error: any = null, token: string | null = null) {
        this.failedQueue.forEach(({ resolve, reject }) => {
            if (error) {
                reject(error);
            } else {
                resolve(token);
            }
        });

        this.failedQueue = [];
    }

    private async refreshTokens(): Promise<string | null> {
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                throw new Error('No refresh token available');
            }

            const config = await getConfig();
            const response = await fetch(`${config.apiUrl}/auth/refresh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refresh_token: refreshToken,
                    client_id: config.clientId,
                }),
            });

            if (!response.ok) {
                throw new Error('Token refresh failed');
            }

            const data = await response.json();

            // Store new tokens
            localStorage.setItem('accessToken', data.access_token);
            if (data.refresh_token) {
                localStorage.setItem('refreshToken', data.refresh_token);
            }

            return data.access_token;
        } catch (error) {
            // Clear all tokens on refresh failure
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userData');
            throw error;
        }
    }

    private async makeRequestWithAuth(
        url: string,
        options: RequestInit = {}
    ): Promise<Response> {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            throw new Error('No access token available');
        }

        const config = await getConfig();
        const fullUrl = url.startsWith('http') ? url : `${config.apiUrl}${url}`;

        const response = await fetch(fullUrl, {
            ...options,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        return response;
    }

    public async request<T = any>(
        url: string,
        options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
        try {
            let response = await this.makeRequestWithAuth(url, options);

            // If we get a 401, try to refresh the token
            if (response.status === 401) {
                if (this.isRefreshing) {
                    // If we're already refreshing, wait for it to complete
                    try {
                        await new Promise((resolve, reject) => {
                            this.failedQueue.push({ resolve, reject });
                        });
                        // Retry the original request with the new token
                        response = await this.makeRequestWithAuth(url, options);
                    } catch (error) {
                        return {
                            error: 'Authentication failed',
                            status: 401,
                        };
                    }
                } else {
                    this.isRefreshing = true;

                    try {
                        const newToken = await this.refreshTokens();
                        this.processQueue(null, newToken);

                        // Retry the original request with the new token
                        response = await this.makeRequestWithAuth(url, options);
                    } catch (refreshError) {
                        this.processQueue(refreshError, null);
                        return {
                            error: 'Authentication failed - please login again',
                            status: 401,
                        };
                    } finally {
                        this.isRefreshing = false;
                    }
                }
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                return {
                    error: errorData.detail || errorData.message || `Request failed with status ${response.status}`,
                    status: response.status,
                };
            }

            const data = await response.json();
            return {
                data,
                status: response.status,
            };
        } catch (error) {
            return {
                error: error instanceof Error ? error.message : 'Network error',
                status: 0,
            };
        }
    }

    // Convenience methods
    public async get<T = any>(url: string): Promise<ApiResponse<T>> {
        return this.request<T>(url, { method: 'GET' });
    }

    public async post<T = any>(url: string, body?: any): Promise<ApiResponse<T>> {
        return this.request<T>(url, {
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
        });
    }

    public async put<T = any>(url: string, body?: any): Promise<ApiResponse<T>> {
        return this.request<T>(url, {
            method: 'PUT',
            body: body ? JSON.stringify(body) : undefined,
        });
    }

    public async delete<T = any>(url: string): Promise<ApiResponse<T>> {
        return this.request<T>(url, { method: 'DELETE' });
    }

    // Method to clear tokens and reset client state
    public clearAuth(): void {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userData');
        this.isRefreshing = false;
        this.failedQueue = [];
    }
}

// Export singleton instance
export const apiClient = ApiClient.getInstance();
