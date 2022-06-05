import React, { useEffect, useState } from "react";
import Product from "./Product";

const FeaturedProduct = () => {
  const [chairs, setChairs] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setChairs(data));
  }, []);
  return (
    <div className="bg-gray-200">
      <div className="container py-10">
        <h1 className="text-4xl text-center pb-10 font-ubuntu font-bold text-gray-800">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {chairs.map((chair) => (
            <Product key={chair.id} chair={chair} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
