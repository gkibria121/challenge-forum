"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
    const pathname = usePathname()
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link href="/dashboard" className={`nav__link ${pathname.startsWith('/dashboard')?"nav__link--active":"" }`}>
            Dashboard
          </Link>
          <Link href="/challenges" className={`nav__link ml-1 ${pathname.startsWith('/challenges')?"nav__link--active":""}`}>
            Challenges
          </Link>
        </li>
        <li className="nav__list-item">
          <Link href="/login" className={`nav__link ${pathname.startsWith('/login')?"nav__link--active":"" }`}>
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
