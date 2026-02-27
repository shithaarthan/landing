/**
 * Tinty API Client
 * 
 * Shared API client for web and mobile apps.
 * Credits are shared across all platforms per user.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8787';

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    credits_remaining?: number;
}

interface TryOnResponse {
    image_url: string;
    processing_time_ms: number;
}

interface SuggestionResponse {
    suggestions: Array<{
        title: string;
        description: string;
        items: Array<{
            type: string;
            description: string;
            color: string;
            style_notes: string;
        }>;
        styling_tips: string[];
        occasions: string[];
    }>;
}

interface UsageResponse {
    period: string;
    tryon_calls: number;
    suggestion_calls: number;
    total_calls: number;
    limit: number;
    remaining: number;
    plan: string;
}

interface ApiKey {
    id: string;
    key?: string;
    key_preview?: string;
    name: string;
    created_at: string;
    last_used_at?: string;
}

class TintyApiClient {
    private apiKey: string | null = null;
    private userToken: string | null = null;
    private platform: 'web' | 'android' | 'ios' = 'web';

    constructor() {
        // Load API key from localStorage if available
        if (typeof window !== 'undefined') {
            this.apiKey = localStorage.getItem('tinty_api_key');
            this.userToken = localStorage.getItem('tinty_user_token');
        }
    }

    setApiKey(key: string) {
        this.apiKey = key;
        if (typeof window !== 'undefined') {
            localStorage.setItem('tinty_api_key', key);
        }
    }

    setUserToken(token: string) {
        this.userToken = token;
        if (typeof window !== 'undefined') {
            localStorage.setItem('tinty_user_token', token);
        }
    }

    setPlatform(platform: 'web' | 'android' | 'ios') {
        this.platform = platform;
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'X-Platform': this.platform,
            ...options.headers as Record<string, string>,
        };

        // Use API key for API routes, user token for key management
        if (endpoint.includes('/keys') || endpoint.includes('/user')) {
            if (this.userToken) {
                headers['Authorization'] = `Bearer ${this.userToken}`;
            }
        } else {
            if (this.apiKey) {
                headers['Authorization'] = `Bearer ${this.apiKey}`;
            }
        }

        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                ...options,
                headers,
            });

            const data = await response.json();

            if (!response.ok) {
                return {
                    success: false,
                    error: data.error || `HTTP ${response.status}`,
                };
            }

            return {
                success: true,
                data,
                credits_remaining: data.credits_remaining,
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Network error',
            };
        }
    }

    // ============ Virtual Try-On ============

    async generateTryOn(
        personImage: string,
        garmentImage: string,
        category: 'upper' | 'lower' | 'full' | 'auto' = 'auto'
    ): Promise<ApiResponse<TryOnResponse>> {
        return this.request('/api/v1/try-on', {
            method: 'POST',
            body: JSON.stringify({
                person_image: personImage,
                garment_image: garmentImage,
                category,
            }),
        });
    }

    // ============ Outfit Suggestions ============

    async getSuggestions(params: {
        occasion?: string;
        style_preferences?: string[];
        colors?: string[];
        budget?: 'low' | 'medium' | 'high';
        description?: string;
    }): Promise<ApiResponse<SuggestionResponse>> {
        return this.request('/api/v1/suggest', {
            method: 'POST',
            body: JSON.stringify(params),
        });
    }

    // ============ API Keys ============

    async createApiKey(name: string): Promise<ApiResponse<{ key: ApiKey; warning: string }>> {
        return this.request('/api/v1/keys', {
            method: 'POST',
            body: JSON.stringify({ name }),
        });
    }

    async listApiKeys(): Promise<ApiResponse<{ keys: ApiKey[] }>> {
        return this.request('/api/v1/keys');
    }

    async deleteApiKey(keyId: string): Promise<ApiResponse<{ message: string }>> {
        return this.request(`/api/v1/keys/${keyId}`, {
            method: 'DELETE',
        });
    }

    // ============ Usage ============

    async getUsage(): Promise<ApiResponse<UsageResponse>> {
        return this.request('/api/v1/try-on/usage');
    }

    async getActivityLog(limit: number = 10): Promise<ApiResponse<{
        logs: Array<{
            id: number;
            endpoint: string;
            platform: string;
            success: boolean;
            processing_time_ms: number;
            created_at: string;
        }>;
    }>> {
        return this.request(`/api/v1/user/activity?limit=${limit}`);
    }

    // ============ User ============

    async getProfile(): Promise<ApiResponse<{
        user: {
            id: string;
            email: string;
            name: string;
            plan: string;
        };
        usage: UsageResponse;
        api_keys_count: number;
    }>> {
        return this.request('/api/v1/user/me');
    }

    // ============ Health ============

    async checkHealth(): Promise<ApiResponse<{
        status: string;
        services: Record<string, string>;
    }>> {
        return this.request('/health');
    }
}

// Export singleton instance
export const tintyApi = new TintyApiClient();
export default tintyApi;
