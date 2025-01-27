"use client";
import React from "react";
import Pagination from "@/components/ui/Pagination";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deleteChallenge } from "@/features/challenges";
import Button from "@/components/ui/Button";
import ChallengeTable from "@/components/challenge/ChallengeTable";
import Table from "@/components/ui/Table";

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
        <ChallengeTable challenges={challenges} onChallengeCLick={() => {}}>
          <ChallengeTable.Heading>
            <Table.Heading className="text-center">Actions</Table.Heading>
          </ChallengeTable.Heading>
          <ChallengeTable.Body>
            <ChallengeTable.ColExtra>
              <Button
                type="dark"
                onClick={(challengeId) => {
                  router.push(`/dashboard/challenges/${challengeId}/edit`);
                }}
              >
                Edit
              </Button>
              <Button
                type="danger"
                onClick={(challengeId) => {
                  alert("challenge deleted! " + challengeId);
                }}
              >
                Delete
              </Button>
            </ChallengeTable.ColExtra>
          </ChallengeTable.Body>
        </ChallengeTable>
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={(Page) => console.log("Go to Page:", Page)}
        />
      </div>
    </main>
  );
};

export default ChallengesPage;
