import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";

const Product = ({ chair }) => {
  const { name, price, img } = chair;
  console.log(chair);
  return (
    <div>
      <div className="p-3 border-[4px] border-gray-200 bg-gray-100 rounded-xl w-[350px] flex flex-col justify-center items-center">
        <img className="flex  h-60  justify-center" src={img} alt="" />
        <div className="">
          <h3 className="text-2xl mt-4 font-semibold font-ubuntu capitalize text-gray-700">
            {name}
          </h3>
          <p className="text-xl mt-1 font-semibold font-ubuntu text-gray-600">
            {" "}
            USD {price}
          </p>
          <p className="font-poppins text-[14px] mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, quis.
          </p>
          <div className="mt-4 flex justify-between">
            <button className=" flex items-center font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 text-white bg-gray-800">
              <ShoppingBagIcon className="w-5 h-5 mr-2" /> Shop Now
            </button>
            <button className=" flex items-center font-semibold py-2 px-5 rounded-md hover:bg-gray-800 transition duration-300 text-white bg-gray-800">
              <ShoppingCartIcon className="w-5 h-5 mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
