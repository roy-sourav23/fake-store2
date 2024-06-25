import React from "react";
import PriceElement from "./PriceElement";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const {
    id,
    title,
    category,
    price,
    discountPercentage,
    rating,
    tags,
    brand,
    shippingInformation,
    thumbnail,
  } = product;
  return (
    <div className="card" key={id}>
      <Link to={`/products/${id}`}>
        <div className="card-image">
          <img src={thumbnail} alt={`image of ${title} `} />
        </div>
      </Link>

      <div className="card-content">
        <Link to={`/products/${id}`}>
          <h3 className="card-title my-1 ">{title}</h3>
        </Link>

        <div className="card-tags flex ml-3">
          {tags.map((tag, index) => {
            return (
              <p
                key={index}
                className="card-singleTag text-sm bg-teal-200 mr-2 px-4 py-1 rounded"
              >
                {tag}
              </p>
            );
          })}
        </div>
        <div className="card-rating">
          <div className="card-rating-stars my-1">
            <RatingStars rating={rating} />
          </div>
        </div>
        <div className="card-price">
          <div className="card-price-current">
            <PriceElement price={price} />
          </div>
          <div className="card-price-before">
            <p>
              List:{" "}
              <span>
                ${(price / (1 - discountPercentage / 100)).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        <div className="card-shipping-info">
          <small className="text-[#5a5a5a] italic">{shippingInformation}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
