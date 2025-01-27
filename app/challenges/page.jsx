"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tag from "@/components/ui/Tag";
import { useSelector } from "react-redux";

function PageContent() {
  const router = useRouter();
  const challenges = useSelector((store) => store.challenges.data);

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
      <main className="flex h-[calc(100vh-10rem)] items-start justify-center">
        <div className="bg-primary relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl p-12 shadow-md">
          <h4 className="">All challenges</h4>
          <Table
            onClick={handleRowClick}
            headers={[
              { label: "No.", key: "id", colSpan: 1 },
              { label: "Title", key: "title", colSpan: 1 },
              {
                label: "Tag",
                key: "tags",
                colSpan: 1,
                class: "table__th--tag",
              },
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
