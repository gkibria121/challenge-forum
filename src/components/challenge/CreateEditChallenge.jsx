"use client";
import React from "react";
import Tabs from "@/components/ui/Tabs";
import TabHeader from "@/components/ui/TabHeader";
import TabBody from "@/components/ui/TabBody";
import Form from "@/components/ui/Form";
import HintEditor from "./HintEditor";
import TabActions from "@/components/ui/TabActions";
import { useChallengeCreationContext } from "@/contexts/ChallengeCreationContext.js";
import { useRouter } from "next/navigation";

const CreateEditChallenge = ({ mode = "create", challenge }) => {
  const { handleSave } = useChallengeCreationContext();
  const router = useRouter();
  return (
    <main className="flex h-[calc(100vh-10rem)] items-start justify-center">
      <div className="bg-primary relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl p-12 shadow-md">
        <Tabs>
          <TabHeader
            tabs={[
              { id: "1", label: "Description" },
              { id: "2", label: "Hints" },
            ]}
          />
          <TabBody>
            <Form id="1" mode={mode} />
            <HintEditor id="2" mode={mode} />
          </TabBody>
          <TabActions
            onSave={() => {
              router.push("/dashboard");
              handleSave(mode, challenge?.id);
            }}
          />
        </Tabs>
      </div>
    </main>
  );
};

export default CreateEditChallenge;
