"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Button from "./Button";
import { useAuth } from "@/contexts/AuthContext";

function Header() {
  const pathname = usePathname();
  const { isAuthenticated, isAdmin } = useAuth();

  const linkStyles = (path: string) => `
    inline-block px-4 py-2 text-lg font-medium transition-all duration-200
    ${
      pathname.startsWith(path)
        ? "text-white border-b-2 border-white"
        : "text-gray-200 hover:text-white hover:border-b-2 hover:border-gray-300"
    }
  `;

  return (
    <nav className="h-16 w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="mx-auto h-full max-w-6xl px-4">
        <ul className="flex h-full items-center justify-between">
          <li className="flex space-x-6">
            {isAuthenticated && isAdmin && (
              <Link href="/dashboard" className={linkStyles("/dashboard")}>
                Dashboard
              </Link>
            )}
            <Link href="/challenges" className={linkStyles("/challenges")}>
              Challenges
            </Link>
          </li>
          <li className="flex space-x-6">
            {isAuthenticated ? (
              <Button
                variant="danger"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link href="/login" className={linkStyles("/login")}>
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="inline-block rounded-lg bg-white px-6 py-2 text-lg font-medium text-blue-700 transition-all duration-200 hover:bg-blue-50"
                >
                  Sign Up
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
