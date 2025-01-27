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
    <main className="main">
      <div className="cf-container">
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
