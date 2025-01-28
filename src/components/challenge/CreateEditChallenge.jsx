"use client";
import React from "react";
import AddChallengeForm from "@/components/challenge/AddChallengeForm";
import HintEditor from "@/components/challenge/HintEditor";
import Tabs from "@/components/ui/TabHeader";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import Main from "../ui/Main";
import Container from "../ui/Container";

const CreateChallenge = ({ mode = "create", challenge = {} }) => {
  const isEditing = mode !== "create";
  const router = useRouter();
  return (
    <Main>
      <Container>
        <form>
          <Tabs>
            <Tabs.TabList>
              {[
                { id: 1, label: "Description" },
                { id: 2, label: "Hints" },
              ].map((tab) => (
                <Tabs.Tab key={tab.id} id={tab.id}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.TabList>

            <Tabs.TabPanel>
              <AddChallengeForm challenge={challenge} isEditing={isEditing} />
            </Tabs.TabPanel>
            <Tabs.TabPanel>
              <HintEditor hints={challenge.hints} isEditing={isEditing} />
            </Tabs.TabPanel>
          </Tabs>

          <div className="absolute bottom-10">
            <Button
              variant="danger"
              buttonType="reset"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              cancel
            </Button>
            <Button variant="green" buttonType="submit">
              save
            </Button>
          </div>
        </form>
      </Container>
    </Main>
  );
};

export default CreateChallenge;
