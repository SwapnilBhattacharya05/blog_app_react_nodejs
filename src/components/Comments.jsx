import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const { user } = useUser();
  console.log(user);

  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  // ALLOWS US TO REVALIDATE THE DATA
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          className="w-full p-4 rounded-xl focus:outline-blue-400"
          placeholder="Write a comment..."
          rows={2}
          style={{ resize: "none" }}
        />
        <button
          type="submit"
          className="bg-blue-800 text-white px-4 py-3 font-medium rounded-xl"
        >
          Send
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error Loading Comments!"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                // VARAIBLE IS OUR NEW COMMENT AND THAT INCLUDES OUR DESCRIPTION => THE COMMENT
                desc: (
                  <span>
                    {mutation.variables.desc}{" "}
                    <div className="inline-block animate-spin">⏳</div>
                  </span>
                ),
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}
          {data.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
