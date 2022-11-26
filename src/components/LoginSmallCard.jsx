import React from "react";

const LoginSmallCard = ({ img, number, type }) => {
  return (
    <div className="inner">
      <div className="content_inner">
        {/* Image */}
        <img src={img} alt="user_image" className="w-10" />
        {/* Heading */}
        <h1 className="text-5xl text-white font-semibold">{number}</h1>
        {/* Sub Heading */}
        <span
          className="text-white"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          {type}
        </span>
      </div>
    </div>
  );
};

export default LoginSmallCard;
