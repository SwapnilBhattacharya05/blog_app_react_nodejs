import Comment from "./Comment";

const Comments = () => {
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
      {/* SINGLE COMMENTS */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
