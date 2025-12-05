// Runtime configuration for the frontend
export interface AppConfig {
    apiUrl: string;
    clientId: string;
    appName: string;
}

// Default configuration - will be overridden by environment variables
const defaultConfig: AppConfig = {
    apiUrl: 'http://localhost:4567',
    clientId: 'wrey-sso-client',
    appName: 'Wrey'
};

// Cached config to avoid multiple API calls
let cachedConfig: AppConfig | null = null;

// Get configuration from environment variables or use defaults
export async function getConfig(): Promise<AppConfig> {
    if (typeof window === 'undefined') {
        // Server-side, use runtime environment variables directly
        return {
            apiUrl: process.env.API_URL || defaultConfig.apiUrl,
            clientId: process.env.CLIENT_ID || defaultConfig.clientId,
            appName: process.env.APP_NAME || defaultConfig.appName,
        };
    }

    // Client-side, fetch from API endpoint
    if (cachedConfig) {
        return cachedConfig;
    }

    try {
        const response = await fetch('/api/config');
        if (response.ok) {
            const config: AppConfig = await response.json();
            cachedConfig = config;
            return config;
        }
    } catch (error) {
        console.warn('Failed to fetch config from API, using defaults:', error);
    }

    // Fallback to defaults
    cachedConfig = defaultConfig;
    return cachedConfig;
}
