import React from "react";
import StarRatings from "../../../node_modules/react-star-ratings";

export default function StarRating({ rating, Dimension, spacing }) {
  return (
    <StarRatings
      rating={rating}
      starDimension={Dimension}
      starSpacing={spacing}
      starRatedColor="#E31B54"
    />
  );
}
