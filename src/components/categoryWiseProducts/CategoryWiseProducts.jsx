import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from "../utilities/Card";
import Categories from "../categories/Categories";

const CategoryWiseProducts = () => {
  const api_url = "https://dummyjson.com/products/category/";
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const getData = () => {
    axios
      .get(`${api_url}${categoryName}`)
      .then((res) => {
        // console.log("response:", res.data.products);
        setProducts(res.data.products);
      })
      .catch((e) => {
        console.log("error: ", e);
      });
  };

  useEffect(() => {
    getData();
  }, [categoryName]);

  return (
    <div className="categorywise-product">
      <div className="info-bar">
        {products.length} results for <span>"{categoryName}"</span>
      </div>
      <div className=" home-wrapper flex ">
        <Categories />
        <div className="main-wrapper">
          <div className="main-container">
            {products.map((product, index) => {
              return <Card key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProducts;
