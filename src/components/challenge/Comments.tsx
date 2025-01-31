"use client";
import { useOptimistic, useState } from "react";
import CommentsList from "./CommentsList";
import RatingStars from "./RatingStars";
import Button from "@/components/ui/Button";
import { Comment } from "@/types/challenges";
const comments: Comment[] = [
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment: "This is a great post! I really enjoyed reading it.",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment: "I found this information really helpful. Thanks for sharing!",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment: "Great insights, I will definitely try these tips out!",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment: "I disagree with some points, but overall good article.",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment: "Amazing write-up! I can't wait to see more like this.",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment:
      "I had some trouble understanding the last section, could you clarify?",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment:
      "This post is a game-changer! Very informative and well-organized.",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment: "Thanks for the tips! I’ll try them out this weekend.",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment:
      "Nice job! Keep up the good work, looking forward to more content.",
    rating: 10,
  },
  {
    id: "1",
    user: { id: "1", name: "John Doe" },
    comment: "Not sure about the conclusion, but the rest was insightful.",
    rating: 10,
  },
];

const Comments = ({
  comments,
  saveComment,
}: {
  comments: Comment[];
  saveComment: () => void;
}) => {
  const [isCommenting, setIsCommenting] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");

  const handleSaveComment = () => {
    if (newComment.trim()) {
      const comment = {
        user: { id: "2", name: "admin" },
        comment: newComment,
        rating: 0,
      };

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
        <Button onClick={() => setIsCommenting(true)} size="lg">
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
