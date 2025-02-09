import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* IMAGE */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={post.img}
            className="rounded-2xl object-cover"
            /*
             * CALCULATION
             * BREAKPOINT: 767px
             * PADDING: 16px
             * 767px - 32px = 735px
             */
            w={735}
            h={400}
          />
        </div>
      )}

      {/* DETAILS AND TITLE */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        {/* TITLE */}
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>

        {/* DETAILS */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">{post.user.username}</Link>
          <span>on</span>
          <Link className="text-blue-800">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>

        {/* DESCRIPTION */}
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-sm text-blue-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
