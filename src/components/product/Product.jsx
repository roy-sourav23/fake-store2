import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RatingStars from "../utilities/RatingStars";

const getDateTime = (time) => {
  const isoString = time;
  const date = new Date(isoString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

const Product = () => {
  const api_url = "https://dummyjson.com/products/";
  const { id: pid } = useParams();
  const [product, setProduct] = useState([]);

  const location = useLocation();
  // console.log("state: ", location);
  //   const prevLocation = window.origin+state.pathname;

  const getProductInfo = () => {
    axios
      .get(`${api_url}${pid}`)
      .then((res) => {
        // console.log("response: ", res.data);
        setProduct(res.data);
      })
      .catch((e) => {
        console.log("error: ", e);
      });
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews,
    returnPolicy,
    minimumOrderQuantity,
    meta,
    images,
    thumbnail,
  } = product;

  const dollars = Math.floor(price);
  const cents = ((price - Math.floor(price)).toFixed(2) * 100).toFixed(0);

  const listPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div>
      <div className="prod-info-bar">
        {/* <span>{product.brand}</span>{" "} */}
        <span className="prod-img">
          <img src={thumbnail} alt={`image of ${title}`} />
          {title}
        </span>
        <span className="price">{price}</span>
      </div>
      <div className="prod-page">
        <div className="back-to-results">
          <i className="ri-arrow-left-s-line"></i>
          <span>
            <Link to={-1}>Back to results</Link>
          </span>
        </div>
        <div className="product-container">
          <div className="left-col">
            <img src={thumbnail} alt={`image of ${title}`} />
          </div>
          <div className="center-col  ">
            <div className="product-title text-[1.5rem] py-[0.3rem]">
              {title}
            </div>
            <div className="prod-rating">
              <div className="flex flex-row">
                {rating && <RatingStars rating={rating} />}
              </div>
            </div>

            <div className="card-tags flex ml-3 py-2">
              {tags && tags.length > 0 ? (
                tags.map((tag, index) => {
                  return (
                    <p
                      key={index}
                      className="card-singleTag text-sm bg-teal-200 mr-2 px-4 py-1 rounded"
                    >
                      {tag}
                    </p>
                  );
                })
              ) : (
                <span></span>
              )}
            </div>
            <div className="pb-2">
              in {category} by {brand}
            </div>
            <hr className="text-slate-100" />
            <div className="prod-price px-1 py-3">
              <div className="">
                <span className="text-red-500 text-[1.05rem]">
                  -{discountPercentage}%
                </span>
                <span className="text-[2.5rem] px-4 font-medium prod-dollars">
                  {dollars}
                  <span className="text-[0.8rem] absolute top-[0.5rem] font-normal">
                    {cents}
                  </span>
                </span>
                <p>
                  List Price: <span className="line-through">${listPrice}</span>
                </p>
              </div>
            </div>
            <hr className="text-slate-100" />
            <div className="prod-info">
              <h4 className="text-[#000] font-medium py-2">
                Product Information
              </h4>
              <p className="flex border-b border-t border-slate-400">
                <span className="w-1/2 bg-slate-200  px-2 py-1">
                  Product Dimension
                </span>
                <span className="w-1/2 bg-white px-2 py-1">
                  {dimensions?.width} * {dimensions?.height} *{" "}
                  {dimensions?.depth}
                </span>
              </p>
              <p className="flex border-b border-slate-400">
                <span className="w-1/2 bg-slate-200  px-2 py-1">weight</span>
                <span className="w-1/2 bg-white px-2 py-1">{weight}</span>
              </p>
              <p className="flex border-b border-slate-400">
                <span className="w-1/2 bg-slate-200  px-2 py-1">sku</span>
                <span className="w-1/2 bg-white px-2 py-1">{sku}</span>
              </p>
              <p className="flex border-b border-slate-400">
                <span className="w-1/2 bg-slate-200  px-2 py-1">Brand</span>
                <span className="w-1/2 bg-white px-2 py-1">{brand}</span>
              </p>
            </div>
          </div>
          <div className="right-col border border-slate-400 rounded-md p-[0.4rem]">
            <div>
              <div className="prod-price ">
                <span className="text-[2.2rem] font-medium prod-dollars">
                  {dollars}
                  <span className="text-[0.8rem] absolute top-[0.5rem] font-normal">
                    {cents}
                  </span>
                </span>
              </div>
              <div className="text-[1.2rem] pl-1">
                {availabilityStatus === "In Stock" ? (
                  <span className="text-[#007600]">{availabilityStatus}</span>
                ) : (
                  <span className="text-[#b12704]">{availabilityStatus}</span>
                )}
              </div>
              <p className="px-1 py-2 italic">
                min order value:
                <span className=""> {minimumOrderQuantity}</span>
              </p>
            </div>

            <div className="flex flex-col my-2 px-[0.2rem] gap-1 text-[0.8rem]">
              <p className="flex w-[100%]">
                <span className="w-1/2 text-slate-500">ships from </span>
                <span className="w-1/2 ">{brand}</span>
              </p>
              <p className="flex w-[100%]">
                <span className="w-1/2 text-slate-500">sold by </span>
                <span className="w-1/2 ">{brand}</span>
              </p>
              <p className="flex w-[100%]">
                <span className="w-1/2 text-slate-500">Returns</span>
                <span className="w-1/2">{returnPolicy}</span>
              </p>
              <p className="flex w-[100%]">
                <span className="w-1/2 text-slate-500">Shipping</span>
                <span className="w-1/2">{shippingInformation}</span>
              </p>
              <p className="flex w-[100%]">
                <span className="w-1/2 text-slate-500">Warranty</span>
                <span className="w-1/2">{warrantyInformation}</span>
              </p>
            </div>
          </div>
          <div className="reviews py-3 px-2">
            <h3 className=" text-[#000] text-[1.5rem] font-medium italic py-3 px-2">
              What the Customers say
            </h3>

            <div className="flex flex-col gap-2">
              {reviews && reviews.length > 0 ? (
                reviews.map((review, index) => {
                  const { rating, comment, date, reviewerName, reviewerEmail } =
                    review;
                  return (
                    <div
                      key={index}
                      className="border border-slate-500 rounded-xl py-3 bg-[#ece2e1]"
                    >
                      <div className="review-profile px-5 py-3">
                        <p className="text-[1rem] ">{reviewerName}</p>

                        <p className="text-[0.8rem] italic text-slate-500 px-[0.2rem]">
                          {reviewerEmail}
                        </p>
                      </div>
                      <div className="px-5">
                        {rating && <RatingStars rating={rating} />}
                      </div>

                      <p className="reviews-review text-[1.4rem] px-10 py-4 italic">
                        {comment}
                      </p>
                      <small className="px-4 text-slate-500">
                        reviewed on {getDateTime(date)}
                      </small>
                    </div>
                  );
                })
              ) : (
                <span>No reviews available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
