import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../utilities/Card";

const AllProducts = () => {
  // console.log("rendered");
  const [products, setProducts] = useState();

  const api_url = "https://dummyjson.com/products";
  const getProducts = () => {
    axios.get(api_url).then((res) => {
      // console.log("res", res.data.products);
      setProducts(res.data.products);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="main-wrapper">
      <div className="main-container">
        {!!products ? (
          products.map((product, index) => {
            return <Card product={product} key={index} />;
          })
        ) : (
          <p>product not </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
