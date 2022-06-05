import React from "react";
import chair from "../../images/banngerImg.png";
const Banner = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between container h-full py-10  lg:h-[85vh]">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold font-ubuntu ">
            <p>
              {" "}
              <span className="text-teal-700">Discover</span> the
            </p>{" "}
            <p>
              best <span className="text-teal-700 capitalize">Furniture</span>
            </p>
          </h1>
          <p className="mt-5 mb-4 font-poppins text-[15px] text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            corrupti est facere quisquam nam reprehenderit numquam voluptatibus
            corporis sint Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="bg-teal-600 font-semibold py-2 px-8 rounded-md hover:bg-teal-700 transition duration-300 text-white">Shop Now</button>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="">
            <img className="h-96" src={chair} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
