import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const api_url = "https://dummyjson.com/products/category-list";
  const [categories, setCategories] = useState([]);

  const getData = () => {
    axios
      .get(api_url)
      .then((res) => {
        // console.log("res", res.data);
        setCategories(res.data);
      })
      .catch((e) => {
        console.log("error: ", e);
      });
  };

  useEffect(() => {
    getData();
  }, [api_url]);

  //category/:categoryName
  return (
    <div className="sidebar ">
      <h4 className="sidebar-title">Categories</h4>
      <ul className="sidebar-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            All
          </NavLink>
        </li>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <NavLink
                to={`/category/${category}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {category}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
