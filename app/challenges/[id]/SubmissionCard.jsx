// SubmissionCard.jsx
const SubmissionCard = ({ id, username, description, isActive, onClick,submission }) => (
    <div
      className={`card ${isActive ? "card--active" : ""}`}
      onClick={() => onClick(submission)}
    >
      <div className="user__info">
        <p className="user__name">{username}</p>
      </div>
      <div className="card__description">{description}</div>
    </div>
  );


export default SubmissionCard;