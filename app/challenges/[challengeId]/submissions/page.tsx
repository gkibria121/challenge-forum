import Submissions from "@/components/submission/Submissions";
import { getChallenge } from "@/services/challenge";
import { ParamsWithChallengeId } from "@/types/params";
import React from "react";

async function Page({ params }: ParamsWithChallengeId) {
  const { challengeId } = await params;
  const challenge = await getChallenge(challengeId);
  const submissions = challenge.submissions;
  if (!submissions.length) throw new Error("No submission");
  return <Submissions submissions={submissions} />;
}

export default Page;
export const generateMetadata = async () => {
  return {
    title: " Submissions",
  };
};
