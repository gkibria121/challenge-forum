// CommentsList.jsx
const CommentsList = ({comments}) => (
    <>
      {comments.map((comment, index) => (
        <div key={index} className="comments__content">
          <div className="user__info">admin</div>
          <div className="comments__description">
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
    </>
  );


export default CommentsList;