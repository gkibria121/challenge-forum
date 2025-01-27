import Submissions from "@/components/submission/Submissions";
import { getChallenge } from "@/services/challenge";
import React from "react";

async function page({ params }) {
  const { challengeId } = await params;
  const challenge = await getChallenge(challengeId);
  const submissions = challenge.submissions;
  if (!submissions.length) throw new Error("No submission");
  return <Submissions submissions={submissions} />;
}

export default page;
