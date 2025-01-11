const CommentsList = ({ comments }) => (
  <>
    {comments
      .slice()
      .reverse()
      .map((comment, index) => (
        <div key={index} className="comments__content">
          <div className="user__info">{comment.user.name}</div>
          <div className="comments__description">
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
  </>
);

export default CommentsList;
