"use client";

import { useState } from "react";
import SubmissionCard from "./SubmissionCard";
import Comments from "./Comments";
import Description from "./Description";
import Hints from "./Hints";
import SubmissionEditor from "./SubmissionEditor";
import TabHeader from "@/components/ui/TabHeader";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addComment, addSubmission } from "@/features/challenges";

export default function Challenge({ challenge }) {
  const [activeSubmissionId, setActiveSubmissionId] = useState(null);
  const [activeTab, setActiveTab] = useState("2");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const activeSubmission = challenge?.submissions.find((submission) => {
    return submission.id === activeSubmissionId;
  });

  const submissions = challenge.submissions;

  const router = useRouter();

  const handleTabLinkClick = (tabId) => {
    setActiveTab(tabId);
  };

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
    <main className="main">
      <div className="cf-container">
        <TabHeader
          activeTab={activeTab}
          onTabClick={handleTabLinkClick}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          setActivTab={setActiveTab}
          goTo={(link) => () => router.push(link)}
          tabs={[
            { id: "1", label: "Description" },
            { id: "2", label: "Submissions" },
            { id: "3", label: "Hints" },
          ]}
        >
          <button
            className={`btn btn--add ${isSubmitting ? "hidden" : ""}`}
            onClick={() => setIsSubmitting(true)}
          >
            Add
          </button>
          <button onClick={() => router.push("/challenges")} className="btn btn--back">
            {String.fromCharCode(8592)} Back
          </button>
        </TabHeader>
        <div className="tabs">
          <div className="tabs__body">
            {activeTab === "1" && <Description challenge={challenge} />}
            {activeTab === "2" && (
              <div className="submissions">
                <div className="submissions__list">
                  {submissions.map((submission) => (
                    <SubmissionCard
                      key={submission.id}
                      submission={submission}
                      isActive={activeSubmission?.id === submission.id}
                      onActiveSubmission={setActiveSubmissionId}
                    />
                  ))}
                  {!submissions.length && "No submissions!"}
                </div>
                <div className="submission">
                  {isSubmitting ? (
                    <SubmissionEditor
                      onCancel={() => setIsSubmitting(false)}
                      onSave={handleSubmissionSave}
                    />
                  ) : (
                    <div className="submission__content">{activeSubmission?.code}</div>
                  )}
                  <Comments comments={activeSubmission?.comments ?? []} saveComment={saveComment} />
                </div>
              </div>
            )}
            {activeTab === "3" && <Hints challenge={challenge} />}
          </div>
        </div>
        {activeTab === "1" && (
          <div className="tabs__footer">
            <button className="btn btn--next">Previous</button>
            <button className="btn btn--prev">Next</button>
          </div>
        )}
      </div>
    </main>
  );
}
