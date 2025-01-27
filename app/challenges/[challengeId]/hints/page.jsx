import Hints from "@/components/challenge/Hints";
import { getChallenge } from "@/services/challenge";
import React from "react";

async function Page({ params }) {
  const { challengeId } = React.use(params);
  const challenge = await getChallenge(challengeId);
  return <Hints challenge={challenge} />;
}

export default Page;
