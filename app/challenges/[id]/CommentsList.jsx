// CommentsList.jsx
const CommentsList = () => (
    <>
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="comments__content">
          <div className="user__info">admin</div>
          <div className="comments__description">
            <p>Solution is acceptable. but it can be improved.</p>
          </div>
        </div>
      ))}
    </>
  );


export default CommentsList;