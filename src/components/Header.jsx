import React from "react";

const Header = ({ category, option }) => {
  return (
    <div
      className="p-4 rounded-md"
      style={{
        background:
          "linear-gradient(90.62deg, #0C0C10 58.7%, rgba(94, 23, 235, 1) 114.83%)",
        boxShadow: "0px 23px 30px rgba(0, 0, 0, 0.26)",
      }}
    >
      <h1 className="text-lightPink font-bold text-2xl">
        {category}
        <span className="text-HeaderTheme text-base"> {option}</span>
      </h1>
    </div>
  );
};

export default Header;
