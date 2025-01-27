// SubmissionCard.jsx
const SubmissionCard = ({ id, isActive, onActiveSubmission, submission }) => {
  return (
    <div
      className={`card ${isActive ? "card--active" : ""}`}
      onClick={() => onActiveSubmission(submission)}
    >
      <div className="user__info">
        <p className="user__name">{submission.user?.name}</p>
      </div>
      <div className="card__description">{submission.description}</div>
    </div>
  );
};

export default SubmissionCard;
