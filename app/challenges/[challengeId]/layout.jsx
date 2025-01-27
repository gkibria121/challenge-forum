"use client";
import Main from "@/components/ui/Main";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function ChallengeLayout({ children }) {
  const { challengeId } = useParams();
  const pathName = usePathname();

  return (
    <Main>
      <Container>
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
      </Container>
    </Main>
  );
}

export default ChallengeLayout;
