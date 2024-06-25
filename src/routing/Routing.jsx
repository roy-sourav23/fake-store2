import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Product from "../components/product/Product";
import CategoryWiseProducts from "../components/categoryWiseProducts/CategoryWiseProducts";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />

        <Route
          path="/category/:categoryName"
          element={<CategoryWiseProducts />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
