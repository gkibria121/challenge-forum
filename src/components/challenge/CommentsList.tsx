import { Comment } from "@/types/challenges";
const CommentsList = ({ comments }: { comments: Comment[] }) => (
  <>
    {comments
      .slice()
      .reverse()
      .map((comment, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4 last:border-0"
        >
          <div className="font-semibold text-gray-800">{comment.user.name}</div>
          <div className="mt-2 text-gray-600">
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
  </>
);

export default CommentsList;
