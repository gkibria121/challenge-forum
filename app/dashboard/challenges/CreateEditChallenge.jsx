"use client";
import React from "react";
import Tabs from "./Tabs";
import TabHeader from "../../../src/components/TabHeader";
import TabBody from "../../../src/components/TabBody";
import Form from "./Form";
import HintEditor from "./HintEditor";
import TabActions from "../../../src/components/TabActions";
import { useChallenges } from "../../../src/contexts/ChallengesContext";

const CreateEditChallenge = ({ mode = "create", challenge }) => {
  const { handleSave } = useChallenges();

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
            <Form id="1" mode={mode} challenge={challenge} />
            <HintEditor id="2" mode={mode} challenge={challenge} />
          </TabBody>
          <TabActions onSave={()=>handleSave(mode,challenge?.id)} />
        </Tabs>
      </div>
    </main>
  );
};

export default CreateEditChallenge;
 