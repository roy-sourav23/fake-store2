import React from "react";

const RatingStars = ({ rating }) => {
  const fullStarUI = <i className="ri-star-fill star"></i>;
  const halfStarUI = <i className="ri-star-half-line star"></i>;
  const emptyStarUI = <i className="ri-star-line star"></i>;

  const total = 5;

  const fullStars = Number(Math.floor(rating));
  const halfStars = Number(rating - fullStars >= 0.5 ? 1 : 0);
  const emptyStars = Number(total - fullStars - halfStars);

  const renderStars = () => {
    const fullStarElements = Array(fullStars).fill(fullStarUI);

    const halfStarElements = halfStars ? [halfStarUI] : [];

    const emptyStarElements = Array(emptyStars).fill(emptyStarUI);

    return [...fullStarElements, ...halfStarElements, ...emptyStarElements];
  };

  const stars = renderStars();

  return (
    <div>
      {stars &&  stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      <span className=" ml-1 text-[#007185]">{rating}</span>
    </div>
  );
};
export default RatingStars;
