//import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../images/Profile.png";
import ReactStars from "react-rating-stars-component";


const ReviewCard = ({ review }) => {
  const options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"#00b3a8",
    size:window.innerWidth < 600 ? 18  : 20,
    value:review.rating,
    isHalf:true
  }

  return (
    <div className="reviewCard">
      <div className="review__userDetails">
        <img src={profilePng} alt="User" />
        <p>{review.name}</p>
      </div>
      <div className="reviewcomment">
        <ReactStars {...options} />
        <span className="reviewCardComment">{review.comment}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
