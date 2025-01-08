"use client";
import React from "react";
import Tabs from "./Tabs";
import TabHeader from "./TabHeader";
import TabBody from "./TabBody";
import Form from "./Form";
import HintEditor from "./HintEditor";
import TabActions from "./TabActions";

const Page = () => {
  return (
    <main className="main">
      <div className="container">
        <Tabs>
          <TabHeader
            tabs={[
              { id: "1", label: "Description" },
              { id: "2", label: "Hints" },
            ]}
          />
          <TabBody>
            <Form id="1" />
            <HintEditor id="2" />
          </TabBody>
          <TabActions />
        </Tabs>
      </div>
    </main>
  );
};

export default Page;
