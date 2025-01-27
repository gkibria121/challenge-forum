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
    <div className="submissions">
      <div className="submissions__list">
        {submissions.map((submission) => (
          <SubmissionCard
            key={submission.id}
            submission={submission}
            isActive={activeSubmission.id === submission.id}
            onActiveSubmission={setActiveSubmission}
          />
        ))}
        {!submissions.length && "No submissions!"}
      </div>
      <div className="submission">
        {isSubmitting ? (
          <SubmissionEditor onCancel={() => setIsSubmitting(false)} onSave={handleSubmissionSave} />
        ) : (
          activeSubmission && <Submission submission={activeSubmission} />
        )}
        <Comments comments={activeSubmission?.comments ?? []} saveComment={saveComment} />
      </div>
    </div>
  );
}

export default Submissions;
