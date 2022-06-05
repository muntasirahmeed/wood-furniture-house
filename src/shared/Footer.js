import React from "react";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="container pt-10">
        <div className="flex justify-center items-center flex-col">
          <img src={logo} className="w-20 h-10" alt="" />
          <h1 className="text-teal-600 font-semibold">Wood House</h1>
        </div>
        <div className="flex gap-10 justify-center mt-4 font-semibold text-lg font-poppins text-gray-700">
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Blogs</p>
          <p>Contact</p>
        </div>
        <p className="text-center mt-5 font-ubuntu pb-5 text-gray-600">Allright reserved &copy;Wood House LTD. </p>
      </div>
    </div>
  );
};

export default Footer;
