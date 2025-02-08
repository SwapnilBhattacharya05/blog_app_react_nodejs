import { useUser } from "@clerk/clerk-react";

// CHANGE TO NEW IF USING UNSTABLE VERSION OF REACT
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  // CHECK IF USER AUTHENTICATED OR NOT
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div className="">Loading...</div>;
  if (isLoaded && !isSignedIn) return <div className="">You should login!</div>;

  return (
    // SINCE NAVBAR IS 80px
    // AT BEGINING IT'S 64px
    <div className="flex flex-col gap-6 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]">
      <h1 className="text-xl font-light">Cerate a New Post</h1>
      <form className="flex-1 mb-6 flex flex-col gap-6">
        <button className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max">
          Add a cover Image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl font-semibold bg-transparent outline-none "
        />
        <div className="flex items-center gap-4">
          <label className="text-sm">Choose a category:</label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="general">Development</option>
            <option value="development">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id=""
          placeholder="A Short Description"
          rows={2}
          className="p-4 rounded-xl bg-white shadow-md"
          style={{ resize: "none" }}
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
