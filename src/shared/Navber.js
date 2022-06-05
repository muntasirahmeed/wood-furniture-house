import React from "react";
import {
  MenuAlt1Icon,
  SearchCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import logo from "../images/logo.png";
const Navber = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex py-2 justify-between  font-ubuntu items-center container">
        <div className="flex items-center ">
          <img src={logo} className="h-7 " alt="" />
          <h1 className="text-xl md:text-2xl font-bold text-teal-600">
            Wood <span className="">House</span>{" "}
          </h1>
        </div>
        <div>
          <div className="hidden font-poppins text-gray-600 lg:flex items-center gap-5 font-[500]">
            <p className=" ">Home</p>
            <p className=" ">Shop</p>
            <p className=" ">Blogs</p>
            <p className="">About</p>
            <p className="">Contact</p>
            <div className="flex gap-2 ">
              <input
                type="text"
                placeholder="Search Furniture"
                class="bg-gray-100 px-2 py-2 font-poppins text-sm focus:outline-none rounded-sm"
              />
              <p className="bg-teal-600 hover:bg-teal-700 transition duration-300 flex items-center rounded-sm px-2">
                <SearchIcon className="h-6 w-6 text-white " />
              </p>
            </div>
          </div>
          <div class="dropdown dropdown-end lg:hidden ">
            <label tabindex="0" class=" pt-1 inline-block ">
              <MenuAlt1Icon className="h-6 w-6  text-teal-600 " />
            </label>

            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-gray-200 text-whiterounded-box  w-52 font-ubuntu"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Conctact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
