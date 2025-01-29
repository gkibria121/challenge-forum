import Main from "@/components/ui/Main";
import Container from "@/components/ui/Container";
import NavLinks from "@/components/ui/NavLinks";
import { getChallenge } from "@/services/challenge";
import { GenerateMetaData } from "@/types/metadata";
import { ChallengeIdParam, ParamsWithChallengeId } from "@/types/params";
import React from "react";
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
        {children}

        {/* <div className="absolute bottom-10 flex w-[80%] justify-between">
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
        </div> */}
      </Container>
    </Main>
  );
}

export default ChallengeLayout;
