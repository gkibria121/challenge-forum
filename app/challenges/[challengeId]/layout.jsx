"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ChallengeLayout({ children, params }) {
  const pathName = usePathname();

  return (
    <main className="flex h-[calc(100vh-10rem)] items-start justify-center">
      <div className="bg-primary relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl p-12 shadow-md">
        <div className="relative">
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
