"use client";
import { useOptimistic, useState } from "react";
import CommentsList from "./CommentsList";
import RatingStars from "./RatingStars";
import Button from "@/components/ui/Button";
const comments = [
  {
    user: { name: "John Doe" },
    comment: "This is a great post! I really enjoyed reading it.",
  },
  {
    user: { name: "Jane Smith" },
    comment: "I found this information really helpful. Thanks for sharing!",
  },
  {
    user: { name: "Alice Brown" },
    comment: "Great insights, I will definitely try these tips out!",
  },
  {
    user: { name: "Bob Johnson" },
    comment: "I disagree with some points, but overall good article.",
  },
  {
    user: { name: "Charlie Lee" },
    comment: "Amazing write-up! I can't wait to see more like this.",
  },
  {
    user: { name: "Sophia Williams" },
    comment:
      "I had some trouble understanding the last section, could you clarify?",
  },
  {
    user: { name: "Michael Davis" },
    comment:
      "This post is a game-changer! Very informative and well-organized.",
  },
  {
    user: { name: "Olivia Martinez" },
    comment: "Thanks for the tips! I’ll try them out this weekend.",
  },
  {
    user: { name: "David Wilson" },
    comment:
      "Nice job! Keep up the good work, looking forward to more content.",
  },
  {
    user: { name: "Emma Taylor" },
    comment: "Not sure about the conclusion, but the rest was insightful.",
  },
];

const Comments = ({}) => {
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
        <Button onClick={() => setIsCommenting(true)} variant="large">
          Show
        </Button>
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
            <Button variant="danger" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleSaveComment}>
              Save
            </Button>
          </div>
        </div>
        <CommentsList comments={comments} />
      </div>
    </>
  );
};

export default Comments;
