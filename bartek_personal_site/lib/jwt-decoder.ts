// Simple JWT decoder for client-side use
export interface JWTPayload {
    sub: string;  // user ID
    email: string;
    name?: string;
    given_name?: string;
    family_name?: string;
    preferred_username?: string;
    email_verified?: boolean;
    exp: number;  // expiration timestamp
    iat: number;  // issued at timestamp
    iss?: string;  // issuer
    aud?: string | string[];  // audience
    scope?: string;
    realm_access?: {
        roles: string[];
    };
    resource_access?: Record<string, { roles: string[] }>;
    [key: string]: any;  // Allow additional fields
}

export function decodeJWT(token: string): JWTPayload | null {
    try {
        // JWT has 3 parts separated by dots: header.payload.signature
        const parts = token.split('.');
        if (parts.length !== 3) {
            return null;
        }

        // Decode the payload (second part)
        const payload = parts[1];

        // Add padding if needed for base64 decoding
        const paddedPayload = payload + '='.repeat((4 - payload.length % 4) % 4);

        // Decode base64
        const decodedPayload = atob(paddedPayload);

        // Parse JSON
        return JSON.parse(decodedPayload) as JWTPayload;
    } catch (error) {
        console.error('Failed to decode JWT:', error);
        return null;
    }
}

export function isTokenExpired(token: string): boolean {
    const payload = decodeJWT(token);
    if (!payload) return true;

    // thats wrong
    return payload.exp * 1000 < Date.now();
}
