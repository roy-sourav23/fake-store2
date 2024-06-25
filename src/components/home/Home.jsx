import React from "react";
import Categories from "../categories/Categories";
import AllProducts from "../all_products/AllProducts";

const Home = () => {
  return (
    <>
      <div className=" home-wrapper flex ">
        <Categories />
        <AllProducts />
      </div>
    </>
  );
};

export default Home;
