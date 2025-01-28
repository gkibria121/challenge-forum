"use client";
import React from "react";
import Pagination from "@/components/ui/Pagination";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deleteChallenge } from "@/features/challenges";
import Button from "@/components/ui/Button";
import ChallengeTable from "@/components/challenge/ChallengeTable";
import Table from "@/components/ui/Table";
import Main from "@/components/ui/Main";

const ChallengesPage = () => {
  const dispatch = useDispatch();

  const challenges = useSelector((store) => store.challenges.data);
  const router = useRouter();
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this challenge?")) {
      dispatch(deleteChallenge(id));
    }
  };

  const handleEdit = (id) => {
    router.push(`/dashboard/challenges/${id}/edit`);
  };

  return (
    <Main>
      <div className="relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl bg-white p-12 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h4>All challenges</h4>

          <Button
            variant="success"
            href="/dashboard/challenges/add"
            isLink={true}
          >
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
                variant="dark"
                onClick={(challengeId) => {
                  router.push(`/dashboard/challenges/${challengeId}/edit`);
                }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
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
    </Main>
  );
};

export default ChallengesPage;
