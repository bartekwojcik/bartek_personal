'use client';

import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { apiClient } from './api-client';
import { decodeJWT } from './jwt-decoder';

// Helper function to handle network errors and provide user-friendly messages
const handleNetworkError = (error: Error): Error => {
  // Log the original error to console for debugging
  console.log('Network request failed:', error.message);

  // Check if this looks like a network error
  const isNetworkError = error.message.includes('NetworkError') ||
    error.message.includes('Failed to fetch') ||
    error.message.includes('fetch') ||
    error.name === 'TypeError';

  if (isNetworkError) {
    return new Error('oops, seems like I turned off the backend');
  }

  // Return original error for other types of errors
  return error;
};

export interface User {
  email: string;
  userId: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => void;
  register: (email: string, password: string, firstName?: string, lastName?: string) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<boolean>;
  refreshAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check if user is authenticated on mount and when route changes
  useEffect(() => {
    checkAuthStatus();

    // Listen for storage changes (when tokens are set in another tab/window)
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const checkAuthStatus = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        // Verify token is still valid by making a request
        const isValid = await verifyToken(accessToken);
        if (isValid) {
          // Token is valid, restore user session
          const userData = localStorage.getItem('userData');
          if (userData) {
            const parsedUserData = JSON.parse(userData);
            setUser(parsedUserData);
          } else {
            // If userData is missing, decode token to recreate it
            const decodedToken = decodeJWT(accessToken);
            if (decodedToken) {
              const user: User = {
                email: typeof decodedToken.email === 'string' ? decodedToken.email : String(decodedToken.email || ''),
                userId: typeof decodedToken.sub === 'string' ? decodedToken.sub : String(decodedToken.sub || ''),
              };
              localStorage.setItem('userData', JSON.stringify(user));
              setUser(user);
            }
          }
        } else {
          // Token is invalid, try to refresh
          const refreshed = await refreshAccessToken();
          if (!refreshed) {
            // Refresh failed, clear everything
            clearAuth();
          }
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      clearAuth();
    } finally {
      setIsLoading(false);
    }
  };

  const verifyToken = async (token: string): Promise<boolean> => {
    try {
      // Temporarily store the token to verify it
      const originalToken = localStorage.getItem('accessToken');
      localStorage.setItem('accessToken', token);

      const response = await apiClient.get('/api/protected');

      // Restore original token
      if (originalToken) {
        localStorage.setItem('accessToken', originalToken);
      } else {
        localStorage.removeItem('accessToken');
      }

      return response.status === 200 && !response.error;
    } catch {
      return false;
    }
  };

  const refreshAccessToken = async (): Promise<boolean> => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) return false;

      const { getConfig } = await import('./config');
      const config = await getConfig();

      // Use direct fetch for refresh to avoid circular dependency
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

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const clearAuth = () => {
    apiClient.clearAuth(); // This clears tokens and resets API client state
    setUser(null);
  };

  const login = async (email: string, password: string) => {
    try {
      const { getConfig } = await import('./config');
      const config = await getConfig();
      const response = await fetch(`${config.apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          client_id: config.clientId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Login failed');
      }

      const data = await response.json();

      // Store tokens
      localStorage.setItem('accessToken', data.access_token);
      if (data.refresh_token) {
        localStorage.setItem('refreshToken', data.refresh_token);
      }

      // Decode JWT token to extract user information
      const decodedToken = decodeJWT(data.access_token);

      if (decodedToken) {
        const userData: User = {
          email: typeof decodedToken.email === 'string' ? decodedToken.email : String(decodedToken.email || ''),
          userId: typeof decodedToken.sub === 'string' ? decodedToken.sub : String(decodedToken.sub || ''),
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        setUser(userData);
      } else {
        throw new Error('Failed to decode access token');
      }

      router.push('/dashboard');
    } catch (error) {
      throw handleNetworkError(error as Error);
    }
  };

  const loginWithGoogle = async () => {
    // Redirect to Google OAuth
    const { getConfig } = await import('./config');
    const config = await getConfig();
    window.location.href = `${config.apiUrl}/auth/google/login`;
  };

  const register = async (email: string, password: string, firstName?: string, lastName?: string) => {
    try {
      const { getConfig } = await import('./config');
      const config = await getConfig();
      const response = await fetch(`${config.apiUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Registration failed');
      }

      // Registration successful, redirect to login
      router.push('/login?message=Registration successful. Please check your email to verify your account.');
    } catch (error) {
      throw handleNetworkError(error as Error);
    }
  };

  const logout = async () => {
    // Call logout endpoint
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        const { getConfig } = await import('./config');
        const config = await getConfig();
        fetch(`${config.apiUrl}/auth/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh_token: refreshToken,
            client_id: config.clientId,
          }),
        }).catch(console.error);
      } catch (error) {
        console.error('Failed to get config for logout:', error);
      }
    }

    clearAuth();
    router.push('/');
  };

  const refreshAuthStatus = async () => {
    await checkAuthStatus();
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    loginWithGoogle,
    register,
    logout,
    refreshAccessToken,
    refreshAuthStatus,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


