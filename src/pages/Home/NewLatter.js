import React from "react";

const NewLatter = () => {
  return (
    <div className=" bg-gray-200 py-10">
      <h1 className="text-center pb-5 font-ubuntu font-semibold text-gray-700 text-4xl">
        Subscribe News Latter
      </h1>
      <dir className=" bg-gray-100 py-12 px-10 container rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex-1 ">
            <h1 className="text-3xl font-bold text-teal-600 font-ubuntu">
              Get Lates Update From our Blogs
            </h1>
            <p className="mt-1 text-gray-600 font-semibold font-poppins">
              Don't hesitate to contact us.
            </p>
          </div>
          <div className="flex-1 flex justify-end gap-2">
            <input
              type="text"
              className="input w-60 bg-gray-300 placeholder:text-lg"
              placeholder="Enter your Email"
            />
            <button className="btn bg-gray-800">Subscribe Us</button>
          </div>
        </div>
      </dir>
    </div>
  );
};

export default NewLatter;
