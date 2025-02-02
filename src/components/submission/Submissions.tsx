"use client";
import Comments from "@/components/challenge/Comments";
import SubmissionCard from "@/components/challenge/SubmissionCard";
import SubmissionEditor from "@/components/challenge/SubmissionEditor";
import Submission from "@/components/submission/Submission";
import { Submission as SubmissionType } from "@/types/challenges";
import { useState } from "react";

function Submissions({ submissions }: { submissions: SubmissionType[] }) {
  const [activeSubmission, setActiveSubmission] = useState(submissions[0]);

  return (
    <div className="mt-10 flex h-full gap-8">
      <div className="flex-basis-2/5 flex flex-col gap-8 p-4 pt-0">
        {submissions.map((submission) => (
          <SubmissionCard
            key={submission.id}
            id={submission.id}
            submission={submission}
            isActive={activeSubmission.id === submission.id}
            onActiveSubmission={setActiveSubmission}
          />
        ))}
        {!submissions.length && <p>No submissions!</p>}
      </div>
      <div className="flex flex-grow flex-col gap-8">
        {activeSubmission && <Submission submission={activeSubmission} />}
        <Comments comments={activeSubmission.comments ?? []} />
      </div>
    </div>
  );
}

export default Submissions;
