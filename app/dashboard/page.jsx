"use client";
import React from "react";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import ActionButtons from "./ActionButtons";
import Tag from "./Tag";
import Link from "next/link";
import { useChallenges } from "@/contexts/ChallengesContext";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deleteChallenge } from "@/features/challenges";

const ChallengesPage = () => {
  const dispatch = useDispatch();

  const challenges = useSelector((store) => store.challenges.data);
  const router = useRouter();
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this challenge?")) {
      dispatch(deleteChallenge(id));
    }
  };

  const handleEdit = (challenge) => {
    router.push(`/dashboard/challenges/${challenge.id}/edit`);
  };

  return (
    <main className="main">
      <div className="cf-container">
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
            { label: "Tag", key: "tags", colSpan: 1, class: "table__th--tag" },
            { label: "Actions", key: "actions", colSpan: 1, class: "table__th--actions" },
          ]}
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
                <ActionButtons
                  onEdit={() => handleEdit(challenge)}
                  onDelete={() => handleDelete(challenge.id)}
                />
              </td>
            </>
          )}
        />
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={(page) => console.log("Go to page:", page)}
        />
      </div>
    </main>
  );
};

export default ChallengesPage;
