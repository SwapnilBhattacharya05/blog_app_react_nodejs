import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          path="userImg.jpeg"
          className="rounded-full w-10 h-10 object-cover"
          w={40}
        />
        <span className="font-medium">Lorem Ispum</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta
          laborum veritatis dolorum facere alias voluptate sit iusto provident
          molestias minus sequi quis accusamus dolor distinctio, est, non illum
          architecto.
        </p>
      </div>
    </div>
  );
};

export default Comment;
