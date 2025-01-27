"use client";

import { useState } from "react";
import SubmissionCard from "./SubmissionCard";
import Comments from "./Comments";
import Description from "./Description";
import Hints from "./Hints";
import SubmissionEditor from "./SubmissionEditor";
import Tabs from "@/components/ui/TabHeader";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addComment, addSubmission } from "@/features/challenges";

export default function Challenge({ challenge }) {
  const [activeSubmissionId, setActiveSubmissionId] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const activeSubmission = challenge?.submissions.find((submission) => {
    return submission.id === activeSubmissionId;
  });

  const submissions = challenge.submissions;

  const router = useRouter();

  const saveComment = (comment) => {
    const challengeId = +id;
    const submissionId = activeSubmission.id;
    dispatch(addComment(challengeId, submissionId, comment));
  };

  const handleSubmissionSave = (submission) => {
    setIsSubmitting(false);
    dispatch(addSubmission(+id, submission));
  };

  return (
    <main className="flex h-[calc(100vh-10rem)] items-start justify-center">
      <div className="bg-primary relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl p-12 shadow-md">
        <Tabs
          onTabChange={(curr) => {
            setActiveTab(curr);
          }}
        >
          <Tabs.TabList>
            {[
              { id: 1, label: "Description" },
              { id: 23, label: "Submissions" },
              { id: 33, label: "Hints" },
            ].map((tab) => (
              <Tabs.Tab key={tab.id} id={tab.id}>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.TabList>

          <Tabs.TabActions>
            <button
              className={`font-inherit font-inherit ml-4 cursor-pointer rounded-2xl rounded-md border-none p-4 px-4 py-1.5 text-white no-underline outline-none ${isSubmitting ? "hidden" : ""}`}
              onClick={() => setIsSubmitting(true)}
            >
              Add
            </button>
            <button
              onClick={() => router.push("/challenges")}
              className="font-inherit font-inherit ml-4 cursor-pointer rounded-2xl rounded-md border-none p-4 px-4 py-1.5 text-white no-underline outline-none"
            >
              {String.fromCharCode(8592)} Back
            </button>
          </Tabs.TabActions>
          <Tabs.TabPanel></Tabs.TabPanel>
          <Tabs.TabPanel></Tabs.TabPanel>
          <Tabs.TabPanel></Tabs.TabPanel>
        </Tabs>
        {activeTab === 1 && (
          <div className="absolute bottom-0 left-0 flex w-full justify-between p-16">
            <button className="font-inherit font-inherit ml-4 cursor-pointer rounded-2xl rounded-md border-none p-4 px-4 py-1.5 text-white no-underline outline-none">
              Previous
            </button>
            <button className="font-inherit font-inherit ml-4 cursor-pointer rounded-2xl rounded-md border-none p-4 px-4 py-1.5 text-white no-underline outline-none">
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
