// SubmissionCard.jsx
const SubmissionCard = ({ id, isActive, onActiveSubmission, submission }) => {
  console.log(submission);
  return (
    <div
      className={`card ${isActive ? "card--active" : ""}`}
      onClick={() => onActiveSubmission(submission.id)}
    >
      <div className="user__info">
        <p className="user__name">{submission.user?.name}</p>
      </div>
      <div className="card__description">{submission.description}</div>
    </div>
  );
};

export default SubmissionCard;
