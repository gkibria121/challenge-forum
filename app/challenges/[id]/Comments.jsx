import { useState } from "react";
import CommentsList from "./CommentsList";
import RatingStars from "./RatingStars";

const Comments = ({ ratings, handleRatingChange,comments,saveComment}) => {
  const [isCommenting, setIsCommenting] = useState(false); 

  const [newComment, setNewComment] = useState("");

  const handleSaveComment = () => {
    if (newComment.trim()) {
      const comment = {
        user: { name: "admin" },
        comment: newComment,
        rating: ratings
      };
      
      saveComment(comment);
      setNewComment(""); 
    }
  };

  const handleCancel = () => {
    setNewComment(""); 
  };

  return (
    <>
      <div className={`comments comments--short ${isCommenting ? "hidden" : ""}`}>
        <p className="comments__title">Comments({comments.length})</p>
        <button
          className="btn btn--add"
          onClick={() => setIsCommenting(true)}
        >
          Show
        </button>
        <div className="comments__short">
          <p>{comments[comments.length - 1]?.comment || "No comments yet"}</p>
        </div>
      </div>
      
      <div className={`comments ${isCommenting ? "" : "hidden"}`}>
        <p className="comments__title">Comments({comments.length})</p>
        
        <div className="comments__add">
          <div className="user__info">admin</div>
          <RatingStars ratings={ratings} onRatingChange={handleRatingChange} />
          <div className="comments__input-container">
            <textarea
              name="comment"
              id="comment"
              className="comments__input"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
            />
          </div>
          <div className="comments__actions">
            <button
              className="btn btn--back"
              onClick={handleCancel}
            >
              cancel
            </button>
            <button
              className="btn btn--add"
              onClick={handleSaveComment}
            >
              save
            </button>
          </div>
        </div>
        <CommentsList comments={comments} />
      </div>
    </>
  );
};

export default Comments;