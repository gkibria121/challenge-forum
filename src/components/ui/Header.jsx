"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathname = usePathname();
  return (
    <nav className="bg-primary h-40 w-full shadow-md">
      <ul className="flex h-full list-none items-center justify-around">
        <li>
          <Link
            href="/dashboard"
            className={`inline-block text-lg ${
              pathname.startsWith("/dashboard")
                ? "border-b-2 border-black"
                : "hover:border-b-2 hover:border-gray-400"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/challenges"
            className={`ml-9 inline-block text-lg ${
              pathname.startsWith("/challenges")
                ? "border-b-2 border-black"
                : "hover:border-b-2 hover:border-gray-400"
            }`}
          >
            Challenges
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className={`inline-block text-lg ${
              pathname.startsWith("/login")
                ? "border-b-2 border-black"
                : "hover:border-b-2 hover:border-gray-400"
            }`}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
