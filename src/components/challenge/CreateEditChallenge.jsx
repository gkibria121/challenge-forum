"use client";
import React from "react";
import AddChallengeForm from "@/components/challenge/AddChallengeForm";
import HintEditor from "@/components/challenge/HintEditor";
import Tabs from "@/components/ui/TabHeader";

const CreateChallenge = ({ mode = "create", challenge }) => {
  if (mode === "create") challenge = {};

  return (
    <main className="flex h-[calc(100vh-10rem)] items-start justify-center">
      <div className="bg-primary relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl p-12 shadow-md">
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
            <AddChallengeForm />
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            {mode == "create" ? (
              <HintEditor />
            ) : (
              <HintEditor hints={challenge.hints} />
            )}
          </Tabs.TabPanel>
        </Tabs>
      </div>
    </main>
  );
};

export default CreateChallenge;
