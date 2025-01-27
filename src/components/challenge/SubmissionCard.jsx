const SubmissionCard = ({ id, isActive, onActiveSubmission, submission }) => {
  return (
    <div
      className={`h-60 w-full cursor-pointer rounded p-4 shadow-md transition-all duration-200 ease-in ${
        isActive
          ? "border-secondary-2 border-2"
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
