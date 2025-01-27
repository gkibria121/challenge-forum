"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ChallengeLayout({ children, params }) {
  const pathName = usePathname();

  return (
    <main className="main">
      <div className="cf-container">
        <div className="tabs__header">
          {[
            { id: 1, label: "Description", href: "description" },
            { id: 23, label: "Submissions", href: "submissions" },
            { id: 33, label: "Hints", href: "hints" },
          ].map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`tab__link ${
                pathName.endsWith(`/${tab.href}`) ? "tab__link--active" : ""
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {children}
      </div>
    </main>
  );
}

export default ChallengeLayout;
