import Hints from "@/components/challenge/Hints";
import { getChallenge } from "@/services/challenge";

async function page({ params }) {
  const { challengeId } = await params;
  const challenge = await getChallenge(challengeId);
  return <Hints challenge={challenge} />;
}

export default page;
