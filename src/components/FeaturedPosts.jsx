import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* FIRST */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* IMAGE */}
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          /*
           * CALCULATION
           * BREAKPOINT: 1023px
           * PADDING: 64px
           * 1023px - 128px = 895px
           */
          w={895}
        />

        {/* DETAILS */}
        <div className=" flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* TITLE */}
        <Link
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
          to="/test"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* OTHERS */}
      <div className="bg-w-full lg:w-1/2 flex flex-col gap-4">
        {/* SECOND */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              /*
               * CALCULATION
               * WIDTH = 33%
               * 33% OF THE CONTAINER
               * 895 / 3 = 298
               */
              w={298}
            />
          </div>
          {/* TITLE AND DETAILS */}
          <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-500">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            {/* TITLE */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* THIRD */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              /*
               * CALCULATION
               * WIDTH = 33%
               * 33% OF THE CONTAINER
               * 895 / 3 = 298
               */
              w={298}
            />
          </div>
          {/* TITLE AND DETAILS */}
          <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-500">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            {/* TITLE */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* FOURTH */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured4.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              /*
               * CALCULATION
               * WIDTH = 33%
               * 33% OF THE CONTAINER
               * 895 / 3 = 298
               */
              w={298}
            />
          </div>

          {/* TITLE AND DETAILS */}
          <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-500">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            {/* TITLE */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
