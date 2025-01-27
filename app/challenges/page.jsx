"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Pagination from "@/components/ui/Pagination";
import ChallengeTable from "@/components/challenge/ChallengeTable";
import { useSelector } from "react-redux";

function PageContent() {
  const router = useRouter();
  const challenges = useSelector((store) => store.challenges.data);

  const handlePageClick = (page) => {
    console.log(`Navigating to page ${page}`);
  };

  return (
    <>
      <main className="flex h-[calc(100vh-10rem)] items-start justify-center">
        <div className="bg-primary relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl rounded-md border px-12 pb-12">
          <ChallengeTable
            challenges={challenges}
            onRowClick={(challengeId) =>
              router.push(`/challenges/${challengeId}`)
            }
          ></ChallengeTable>

          <Pagination
            currentPage={2}
            totalPages={10}
            onPageClick={handlePageClick}
          />
        </div>
      </main>
    </>
  );
}

export default PageContent;
