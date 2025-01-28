import Main from "@/components/ui/Main";
import Container from "@/components/ui/Container";
import NavLinks from "@/components/ui/NavLinks";
import { getChallenge } from "@/services/challenge";

export async function generateMetadata({ params }) {
  const { challengeId } = await params;

  const challenge = await getChallenge(challengeId);
  return {
    title: {
      template: `%s | ${challenge.title}`,
    },
  };
}

async function ChallengeLayout({ children, params }) {
  const { challengeId } = await params;

  return (
    <Main>
      <Container>
        <NavLinks
          links={[
            { id: 1, label: "Description", href: "description" },
            { id: 23, label: "Submissions", href: "submissions" },
            { id: 33, label: "Hints", href: "hints" },
          ]}
          preFix={`/challenges/${challengeId}/`}
        />
        {children}
      </Container>
    </Main>
  );
}

export default ChallengeLayout;
