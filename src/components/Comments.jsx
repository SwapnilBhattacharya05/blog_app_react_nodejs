import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return "Loading...";

  if (error) return "Something went wrong!" + error.message;

  if (!data) return "Comments not found!";
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between w-full">
        <textarea
          className="w-full p-4 rounded-xl"
          placeholder="Write a comment..."
          rows={2}
          style={{ resize: "none" }}
        />
        <button className="bg-blue-800 text-white px-4 py-3 font-medium rounded-xl">
          Send
        </button>
      </div>
      {data.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
