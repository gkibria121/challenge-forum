"use client";
import Comments from "@/components/challenge/Comments";
import SubmissionCard from "@/components/challenge/SubmissionCard";
import SubmissionEditor from "@/components/challenge/SubmissionEditor";
import Submission from "@/components/submission/Submission";
import { useState } from "react";

function Submissions({ submissions }) {
  const [activeSubmission, setActiveSubmission] = useState(submissions[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const saveComment = () => {};

  return (
    <div className="flex h-full gap-8">
      <div className="flex-basis-2/5 flex flex-col gap-8 p-4 shadow-md">
        {submissions.map((submission) => (
          <SubmissionCard
            key={submission.id}
            submission={submission}
            isActive={activeSubmission.id === submission.id}
            onActiveSubmission={setActiveSubmission}
          />
        ))}
        {!submissions.length && <p>No submissions!</p>}
      </div>
      <div className="flex flex-grow flex-col gap-8">
        {isSubmitting ? (
          <SubmissionEditor
            onCancel={() => setIsSubmitting(false)}
            onSave={handleSubmissionSave}
          />
        ) : (
          activeSubmission && <Submission submission={activeSubmission} />
        )}
        <Comments
          comments={activeSubmission?.comments ?? []}
          saveComment={saveComment}
        />
      </div>
    </div>
  );
}

export default Submissions;
