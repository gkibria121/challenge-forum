import NextAuth, { NextAuthConfig, DefaultSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import type { JWT } from "next-auth/jwt";

// Extend the User type
declare module "next-auth" {
  interface User {
    role?: "admin" | "user";
  }

  interface Session extends DefaultSession {
    user: User & { role: "admin" | "user" };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "admin" | "user";
  }
}

// NextAuth configuration
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GithubProvider({
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          image: profile.avatar_url,
          email: profile.email,
          role: profile.email === "gkibria121@gmail.com" ? "admin" : "user",
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
      session.user.role = token.role; // Ensure session has role
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      return true;
    },
  },
} satisfies NextAuthConfig);
