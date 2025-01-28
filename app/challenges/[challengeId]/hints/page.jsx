import Hints from "@/components/challenge/Hints";
import { getChallenge } from "@/services/challenge";
import React from "react";
export const generateMetadata = async () => {
  return {
    title: "Hints",
  };
};
async function Page({ params }) {
  const { challengeId } = await params;
  const challenge = await getChallenge(challengeId);
  return <Hints challenge={challenge} />;
}

export default Page;
