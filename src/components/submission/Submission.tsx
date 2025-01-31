import { Submission as SubmissionType } from "@/types/challenges";

function Submission({ submission }: { submission: SubmissionType }) {
  return (
    <div className="border-secondary-1 h-[80vh] rounded-lg border bg-white p-4">
      <pre className="whitespace-pre-wrap break-words">{submission?.code}</pre>
    </div>
  );
}

export default Submission;
