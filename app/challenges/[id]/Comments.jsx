// Comments.jsx
import CommentsList from "./CommentsList";
import RatingStars from "./RatingStars"
const Comments = ({ 
    isCommenting, 
    setIsCommenting, 
    ratings, 
    handleRatingChange 
  }) => (
    <>
      <div className={`comments comments--short ${isCommenting ? "hidden" : ""}`}>
        <p className="comments__title">Comments(10)</p>
        <button
          className="btn btn--add"
          onClick={() => setIsCommenting(prev => !prev)}
        >
          Add
        </button>
        <div className="comments__short">
          <p>Solution is acceptable. but it can be improved.</p>
        </div>
      </div>
      
      <div className={`comments ${isCommenting ? "" : "hidden"}`}>
        <p className="comments__title">Comments(10)</p>
        <div className="comments__add">
          <div className="user__info">admin</div>
          <RatingStars ratings={ratings} onRatingChange={handleRatingChange} />
          <div className="comments__input-container">
            <textarea
              name="comment"
              id="comment"
              className="comments__input"
            />
          </div>
          <div className="comments__actions">
            <button
              className="btn btn--back"
              onClick={() => setIsCommenting(prev => !prev)}
            >
              cancel
            </button>
            <button
              className="btn btn--add"
              onClick={() => setIsCommenting(prev => !prev)}
            >
              save
            </button>
          </div>
        </div>
        <CommentsList />
      </div>
    </>
  );
  
  export  default Comments;