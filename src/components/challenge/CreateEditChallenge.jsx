"use client";
import React from "react";
import AddChallengeForm from "@/components/challenge/AddChallengeForm";
import HintEditor from "@/components/challenge/HintEditor";
import Tabs from "@/components/ui/TabHeader";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import Main from "../ui/Main";

const CreateChallenge = ({ mode = "create", challenge = {} }) => {
  const isEditing = mode !== "create";
  const router = useRouter();
  return (
    <Main>
      <form className="bg-primary relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl p-12 shadow-md">
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

        <div>
          <Button
            type="danger"
            buttonType="reset"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            cancel
          </Button>
          <Button type="green" buttonType="submit">
            save
          </Button>
        </div>
      </form>
    </Main>
  );
};

export default CreateChallenge;
