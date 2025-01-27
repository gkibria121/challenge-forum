"use client";
import React from "react";
import Table from "@/components/ui/Table";
import Pagination from "@/components/ui/Pagination";
import ActionButtons from "@/components/ui/ActionButtons";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deleteChallenge } from "@/features/challenges";
import Button from "@/components/ui/Button";

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
    <main className="flex h-[calc(100vh-10rem)] items-start justify-center">
      <div className="bg-primary relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl p-12 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h4>All challenges</h4>

          <Button type="success" href="/dashboard/challenges/add" isLink={true}>
            Add
          </Button>
        </div>
        <Table
          headers={[
            { label: "No.", key: "id", colSpan: 1 },
            { label: "Title", key: "title", colSpan: 3 },
            { label: "Tag", key: "tags", colSpan: 1, class: "table__th--tag" },
            {
              label: "Actions",
              key: "actions",
              colSpan: 1,
              class: "table__th--actions",
            },
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
