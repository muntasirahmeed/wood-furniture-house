import React from "react";
import Banner from "./Banner";
import FeaturedProduct from "./FeaturedProduct";
import HeroSection from "./HeroSection";
import LatestBlogs from "./LatestBlogs";
import NewLatter from "./NewLatter";

const Home = () => {
  return (
    <div className=" ">
      <Banner />
      <HeroSection />
      <FeaturedProduct />
      <LatestBlogs />
      <NewLatter />
    </div>
  );
};

export default Home;
