import React from "react";
import Banner from "./Banner";
import FeaturedProduct from "./FeaturedProduct";
import HeroSection from "./HeroSection";
import LatestBlogs from "./LatestBlogs";

const Home = () => {
  return (
    <div className=" ">
      <Banner />
      <HeroSection />
      <FeaturedProduct />
      <LatestBlogs/>
    </div>
  );
};

export default Home;
