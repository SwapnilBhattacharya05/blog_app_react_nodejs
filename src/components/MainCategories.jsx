import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* LINKS */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          // ?CREATING A CATEGORY HERE
          to="/posts?cat=web-design"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=database"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=seo"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Marketing
        </Link>
      </div>
      {/* SEPERATOR */}
      <span className="text-xl font-medium">|</span>
      {/* SEARCH */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
        >
          <path
            d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
            stroke="gray"
          />
          <path d="M17.5 17.5L22 22" stroke="gray" />
        </svg>
        <input
          type="text"
          placeholder="Search a post..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default MainCategories;
