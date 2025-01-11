"use client"
import React from "react";
import Table from "../../src/components/Table";
import Pagination from "../../src/components/Pagination";
import ActionButtons from "./ActionButtons";
import Tag from "./Tag"; 
import Link from "next/link";
import { useChallenges } from "../../src/contexts/ChallengesContext";

const ChallengesPage = () => {
  const { challenges } = useChallenges();

  return (
    <main className="main">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <h4>All challenges</h4>
          <Link className="btn btn--add" href="/dashboard/challenges/add">
            Add
          </Link>
        </div>
        <Table
          headers={[
            { label: "No.", key: "id", colSpan: 1 },
            { label: "Title", key: "title", colSpan: 3 },
            { label: "Tag", key: "tags", colSpan: 1 ,class : "table__th--tag"},
            { label: "Actions", key: "actions", colSpan: 1 ,class : "table__th--actions"},
          ]}
          actions={<div>action buttons</div>}
          data={challenges}
          renderRow={(challenge) => (
            <>
              <td className="table__column">{challenge.id}</td>
              <td className="table__column" colSpan="3">
                {challenge.title}
              </td>
              <td className="table__column table__column--tags tags">
                {challenge.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </td>
              <td className="table__column">
                <ActionButtons />
              </td>
            </>
          )}
        />
        <Pagination
          currentPage={2}
          totalPages={10}
          onPageChange={(page) => console.log("Go to page:", page)}
        />
      </div>
    </main>
  );
};

export default ChallengesPage;
