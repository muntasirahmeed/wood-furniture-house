import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Blog = ({ blog }) => {
  return (
    <div>
      <div className="w-[350px]  bg-gray-200 p-2 rounded-lg">
        <div className="relative pb-3 ">
          <img src={blog.img} className="rounded-lg" alt="" />
          <button className="bg-teal-600 py-1 px-4  text-white font-poppins rounded-full text-[10px] absolute bottom-0 right-4">
            New Blogs{" "}
          </button>
        </div>
        <div className="px-2">
          <h2 className="font-poppins font-semibold text-xl mt-4  text-gray-700">
            {blog.title}
          </h2>
          <p className="mt-2 font-poppins  text-sm text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, animi itaque! Exercitationem, voluptate? Ab soluta
            alias vero tempore ipsa sequi non nihil ea temporibus culpa error
            incidunt laudantium quia voluptates,
          </p>
          <p className="flex my-4 justify-end items-center font-bold text-teal-600">
            Learn More <ArrowRightIcon className="w-5 h-5 ml-3" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
