"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Pagination from "./../../src/components/Pagination";
import Table from "../../src/components/Table";
import Tag from "../dashboard/Tag";
import { useChallenges } from "../../src/contexts/ChallengesContext";

function PageContent() {
  const router = useRouter();
  const { challenges } = useChallenges();

  const handleRowClick = (event) => {
    const challengeLinkEl = event.target.closest(".table__row");
    if (!challengeLinkEl) return;
    const challengeId = challengeLinkEl.dataset.challengeId;

    if (!challengeId) {
      throw new Error("Challenge id not found!");
    }

    router.push(`/challenges/${challengeId}`);
  };

  const handlePageClick = (page) => {
    console.log(`Navigating to page ${page}`);
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <h4 className="">All challenges</h4>
          <Table
            onClick={handleRowClick}
            headers={[
              { label: "No.", key: "id", colSpan: 1 },
              { label: "Title", key: "title", colSpan: 1 },
              { label: "Tag", key: "tags", colSpan: 1, class: "table__th--tag" },
            ]}
            data={challenges}
            renderRow={(challenge) => (
              <>
                <td className="table__column">{challenge.id}</td>
                <td className="table__column" colSpan="1">
                  {challenge.title}
                </td>
                <td className="table__column table__column--tags tags">
                  {challenge.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </td>
              </>
            )}
          />
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
