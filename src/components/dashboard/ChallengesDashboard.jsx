"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import ChallengeTable from "@/components/challenge/ChallengeTable";
import Table from "@/components/ui/Table";

function ChallengesDashboard({ challenges }) {
  const router = useRouter();
  return (
    <ChallengeTable challenges={challenges} onChallengeCLick={() => {}}>
      <ChallengeTable.Heading>
        <Table.Heading className="text-center">Actions</Table.Heading>
      </ChallengeTable.Heading>
      <ChallengeTable.Body>
        <ChallengeTable.ColExtra>
          <Button
            variant="dark"
            size="sm"
            onClick={(challengeId) => {
              router.push(`/dashboard/challenges/${challengeId}/edit`);
            }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={(challengeId) => {
              alert("challenge deleted! " + challengeId);
            }}
          >
            Delete
          </Button>
        </ChallengeTable.ColExtra>
      </ChallengeTable.Body>
    </ChallengeTable>
  );
}

export default ChallengesDashboard;
