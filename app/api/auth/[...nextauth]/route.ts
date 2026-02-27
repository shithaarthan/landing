import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Force dynamic rendering for auth routes
export const dynamic = 'force-dynamic';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            // Sync user to backend
            try {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8787'}/api/v1/user`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: `user_${user.id}`,
                        email: user.email,
                        name: user.name,
                        photo_url: user.image,
                    }),
                });
            } catch (e) {
                console.error('Failed to sync user:', e);
            }
            return true;
        },
        async session({ session, token }) {
            // Add user id to session
            if (session.user) {
                (session.user as { id?: string | null }).id = token.sub;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },
    pages: {
        signIn: '/login',
    },
});

export { handler as GET, handler as POST };
