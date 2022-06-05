import React, { useState } from "react";
import Blog from "./Blog";

const LatestBlogs = () => {
  const blogs = [
    {
      img: "https://i.ibb.co/HXjwLPt/img1.jpg",
      title: "Lemke Gutkowski and Post knowing more about",
    },
    {
      img: "https://i.ibb.co/xFCR68N/img2.jpg",
      title: "Creativity is the key to success for zitavex's salve soluiton",
    },
    {
      img: "https://i.ibb.co/5LKL0BR/img3.jpg",
      title: "Varrora Distructor No longer a MITE word",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="container pt-10 pb-16">
        <h1 className="text-4xl text-center pb-10 font-ubuntu font-bold text-gray-800">
          Latest Blogs Post
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
