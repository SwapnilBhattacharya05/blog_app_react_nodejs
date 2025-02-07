import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* IMAGE */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          path="postImg.jpeg"
          className="rounded-2xl object-cover"
          /*
           * CALCULATION
           * BREAKPOINT: 767px
           * PADDING: 16px
           * 767px - 32px = 735px
           */
          w={735}
        />
      </div>

      {/* DETAILS AND TITLE */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        {/* TITLE */}
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          cupiditate.
        </Link>

        {/* DETAILS */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Test User</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>

        {/* DESCRIPTION */}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          consequuntur ut veniam nostrum asperiores repellendus fugiat! Sit
          eveniet, aliquid corrupti laudantium omnis beatae pariatur quaerat. G
        </p>
        <Link to="/test" className="underline text-sm text-blue-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
