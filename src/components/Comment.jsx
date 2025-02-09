import { format } from "timeago.js";
import Image from "./Image";

const Comment = ({ comment }) => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <img
            src={comment.user.img}
            className="rounded-full w-10 h-10 object-cover"
            width={40}
            height={40}
          />
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-500">
          {format(comment.createdAt)}
        </span>
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
