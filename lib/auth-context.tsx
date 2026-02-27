'use client';

import { createContext, useContext, ReactNode } from 'react';
import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react';
import { tintyApi } from './api';

interface AuthContextType {
    user: {
        id?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    } | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthContextProvider({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    const user = session?.user ? {
        id: (session.user as { id?: string }).id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
    } : null;

    // Set user token for API calls when session changes
    if (user?.id) {
        tintyApi.setUserToken(`user_${user.id}`);
    }

    const handleSignInWithGoogle = async () => {
        await signIn('google', { callbackUrl: '/dashboard' });
    };

    const handleSignOut = async () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('tinty_user_token');
            localStorage.removeItem('tinty_api_key');
        }
        await signOut({ callbackUrl: '/' });
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signInWithGoogle: handleSignInWithGoogle,
            signOut: handleSignOut,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function AuthProvider({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </SessionProvider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
