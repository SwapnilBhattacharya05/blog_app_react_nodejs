const Search = () => {
  return (
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
  );
};

export default Search;
