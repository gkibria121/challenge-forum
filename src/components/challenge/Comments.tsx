"use client";
import { useOptimistic, useState } from "react";
import CommentsList from "./CommentsList";
import RatingStars from "./RatingStars";
import Button from "@/components/ui/Button";
import { Comment } from "@/types/challenges";
import TextArea from "../ui/TextArea";
import { saveComment } from "@/actions/comments";
import { ZodFormattedError } from "zod";
import { isAuthrized } from "../lib/authorization";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useAuth } from "@/contexts/AuthContext";

const Comments = ({ comments }: { comments: Comment[] }) => {
  const session = useSession();
  const [isCommenting, setIsCommenting] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(5);
  const [errors, setErrors] = useState<
    | ZodFormattedError<
        {
          rating: string;
          comment: string;
        },
        string
      >
    | undefined
  >();
  const { isAuthenticated } = useAuth();
  const handleSaveComment = async (formData: FormData) => {
    if (isAuthenticated) toast.error("Please login before continue.");

    const { errors } = await saveComment(formData);

    setErrors(errors);
  };

  const handleCancel = () => {
    setIsCommenting(false);
  };

  return (
    <form action={handleSaveComment}>
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
          <RatingStars defaultRating={rating} onRatingChange={setRating} />
          <input type="hidden" name="rating" value={rating} />
          <div className="mt-4">
            <TextArea
              name="comment"
              placeholder="Write your comment here..."
              error={errors?.comment?._errors}
            />
          </div>
          <div className="mt-4 flex gap-4">
            <Button variant="danger" buttonType="reset" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="success" buttonType="submit">
              Save
            </Button>
          </div>
        </div>
        <CommentsList comments={comments} />
      </div>
    </form>
  );
};

export default Comments;
