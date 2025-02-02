import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GithubProvider({
      profile(profile) {
        return {
          name: profile.name,
          image: profile.avatar_url,
          email: profile.email,
          role: profile.email === "admin@example.com" ? "admin" : "user", // Example role assignment
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "user"; // Assign role to JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role; // Attach role to session
      }
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      return true;
    },
  },
});
