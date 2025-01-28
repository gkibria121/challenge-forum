import Main from "@/components/ui/Main";
import Container from "@/components/ui/Container";
import NavLinks from "@/components/ui/NavLinks";
import { getChallenge } from "@/services/challenge";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }) {
  const { challengeId } = await params;

  const challenge = await getChallenge(challengeId);
  return {
    title: {
      template: `%s | ${challenge.title}`,
    },
  };
}
const isValidChallengeId = (id) => {
  return id > 0 ? id : "";
};
async function ChallengeLayout({ children, params }) {
  const { challengeId } = await params;
  const id = parseInt(challengeId);

  return (
    <Main>
      <Container>
        <NavLinks
          links={[
            { id: 1, label: "Description", href: "description" },
            { id: 23, label: "Submissions", href: "submissions" },
            { id: 33, label: "Hints", href: "hints" },
          ]}
          preFix={`/challenges/${id}/`}
        />
        {children}

        <div className="absolute bottom-10 flex w-[80%] justify-between">
          <Button
            isLink={true}
            variant={isValidChallengeId(id - 1) ? "dark" : "danger"}
            href={`/challenges/${isValidChallengeId(id - 1) && id - 1}`}
            size="sm"
          >
            {isValidChallengeId(id - 1) ? "prev" : "back"}
          </Button>
          <Button isLink={true} href={`/challenges/${id + 1}`} size="sm">
            Next
          </Button>
        </div>
      </Container>
    </Main>
  );
}

export default ChallengeLayout;
