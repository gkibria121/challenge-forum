"use client";
import { useState } from "react";
import CommentsList from "./CommentsList";
import RatingStars from "./RatingStars";

const Comments = ({ comments, saveComment }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleSaveComment = () => {
    if (newComment.trim()) {
      const comment = {
        user: { name: "admin" },
        comment: newComment,
        rating: 0,
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
      <div
        className={`relative p-4 shadow-md ${
          isCommenting ? "hidden" : "flex flex-col"
        }`}
      >
        <p className="mb-4 text-xl font-semibold">
          Comments ({comments.length})
        </p>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => setIsCommenting(true)}
        >
          Show
        </button>
        <div className="mt-4 rounded bg-gray-100 p-4">
          <p>{comments[comments.length - 1]?.comment || "No comments yet"}</p>
        </div>
      </div>

      <div
        className={`relative p-4 shadow-md ${isCommenting ? "block" : "hidden"}`}
      >
        <p className="mb-4 text-xl font-semibold">
          Comments ({comments.length})
        </p>

        <div className="mb-6">
          <div className="font-semibold text-gray-800">admin</div>
          <RatingStars />
          <div className="mt-4">
            <textarea
              name="comment"
              id="comment"
              className="resize-vertical h-32 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
            />
          </div>
          <div className="mt-4 flex gap-4">
            <button
              className="rounded bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={handleSaveComment}
            >
              Save
            </button>
          </div>
        </div>
        <CommentsList comments={comments} />
      </div>
    </>
  );
};

export default Comments;
