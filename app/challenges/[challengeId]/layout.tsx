import Main from "@/components/ui/Main";
import Container from "@/components/ui/Container";
import NavLinks from "@/components/ui/NavLinks";
import { getChallenge } from "@/services/challenge";
import { GenerateMetaData } from "@/types/metadata";
import { ChallengeIdParam, ParamsWithChallengeId } from "@/types/params";
import React from "react";
import Button from "@/components/ui/Button";
export async function generateMetadata({
  params,
}: ParamsWithChallengeId): Promise<GenerateMetaData> {
  const { challengeId } = await params;

  const challenge = await getChallenge(challengeId);
  return {
    title: {
      template: `%s | ${challenge.title}`,
    },
  };
}

type ChalleneLayoutProps = {
  children: React.ReactElement;
  params: ChallengeIdParam;
};

async function ChallengeLayout({ children, params }: ChalleneLayoutProps) {
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
        <div className="absolute right-0 top-0 m-4 flex">
          <Button
            size="sm"
            variant="primary"
            isLink={true}
            href={`/challenges/${challengeId}/submissions/add`}
          >
            Add
          </Button>
        </div>
        {children}
      </Container>
    </Main>
  );
}

export default ChallengeLayout;
