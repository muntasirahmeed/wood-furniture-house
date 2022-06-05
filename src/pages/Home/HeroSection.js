import React from "react";
import chair from "../../images/heroImg.png";
const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="container flex flex-col-reverse lg:flex-row py-10 items-center font-poppins">
        <div className="flex-1 relative">
          <img src={chair} alt="" />
          <div className="bg-teal-600 absolute top-10 right-36 rounded-full p-5 text-white flex flex-col items-center">
            <p className="font-bold text-2xl">75%</p>
            <p className="mt-[-5px]">offer</p>
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-semibold font-poppins text-gray-800">
           Single Seated Sofa
          </h1>
          <p className="mt-5 mb-4 font-poppins text-[15px]  text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem et libero deserunt error molestiae molestias sapiente repellendus, optio consectetur iure cupiditate earum nemo saepe vel dolorem dolores, atque harum voluptas? Ullam vel inventore iure nihil voluptas, natus ab blanditiis velit repellat maiores at ad repudiandae, molestiae saepe fugiat numquam quisquam quia, adipisci deserunt alias praesentium quo. A eius obcaecati similique!
          </p>
          <button className="bg-teal-600  py-2 px-8 rounded-md hover:bg-teal-700 transition duration-300 text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
