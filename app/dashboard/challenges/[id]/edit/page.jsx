import CreateEditChallenge from "@/components/challenge/CreateEditChallenge";
import { getChallenge } from "@/services/challenge";
async function Page({ params }) {
  const { id } = await params;

  const currentChallenge = await getChallenge(id);

  return <CreateEditChallenge mode="edit" challenge={currentChallenge} />;
}

export default Page;
