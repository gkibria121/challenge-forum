"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function ChallengeLayout({ children }) {
  const { challengeId } = useParams();
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
              href={`/challenges/${challengeId}/${tab.href}`}
              className={`ml-4 cursor-pointer bg-white p-0 pb-2 ${
                pathName.endsWith(`/${tab.href}`)
                  ? "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-black"
                  : ""
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
