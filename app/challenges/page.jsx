"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Pagination from "@/components/ui/Pagination";
import Container from "@/components/ui/Container";
import Main from "@/components/ui/Main";
import ChallengeTable from "@/components/challenge/ChallengeTable";
import { useSelector } from "react-redux";

function PageContent() {
  const router = useRouter();
  const challenges = useSelector((store) => store.challenges.data);

  const handlePageClick = (Page) => {
    console.log(`Navigating to Page ${Page}`);
  };

  return (
    <>
      <Main>
        <Container>
          <ChallengeTable
            challenges={challenges}
            onChallengeClick={(challengeId) =>
              router.push(`/challenges/${challengeId}`)
            }
          ></ChallengeTable>

          <Pagination
            currentPage={2}
            totalPages={10}
            onPageClick={handlePageClick}
          />
        </Container>
      </Main>
    </>
  );
}

export default PageContent;
