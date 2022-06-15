import { Rating } from "@mui/material";
import React from "react";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    size: "small",
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
    <div className="review__userDetails">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
    </div>
    <div className="reviewcomment">
      <Rating {...options} />
      <div className="reviewCardComment">{review.comment}</div>
    </div>
  </div>
  
  );
};

export default ReviewCard;