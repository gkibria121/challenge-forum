import { ParamsWithChallengeId } from "@/types/params";

import { redirect } from "next/navigation";

async function Page({ params }: ParamsWithChallengeId) {
  const { challengeId } = params;

  redirect(`/challenges/${challengeId}/description`); // Navigate to the new post Page
}

export default Page;
