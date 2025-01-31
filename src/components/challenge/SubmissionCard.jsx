const SubmissionCard = ({ id, isActive, onActiveSubmission, submission }) => {
  return (
    <div
      className={`border-secondary-1 h-60 w-full cursor-pointer rounded border p-4 transition-all duration-200 ease-in ${
        isActive
          ? "border-blue-500"
          : "hover:border-secondary-2 hover:translate-y-0.5 hover:border"
      }`}
      onClick={() => onActiveSubmission(submission)}
    >
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800">
          {submission.user?.name}
        </p>
      </div>
      <div className="text-sm text-gray-600">{submission.description}</div>
    </div>
  );
};

export default SubmissionCard;
