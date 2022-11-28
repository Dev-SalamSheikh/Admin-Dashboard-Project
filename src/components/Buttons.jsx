import React from "react";
import membersearch from "../assets/membersearch.png";

const Buttons = () => {
  // lower card button data
  const btnDatas = ["Copy", "CSV", "Excel", "PDF", "Print"];
  return (
    <div className="flex justify-between items-center">
      {/* Left */}
      <div className="w-full">
        {/* Buttons */}
        <div className="flex gap-2">
          {btnDatas.map((item, i) => (
            <span
              key={i}
              className="bg-memberName font-semibold p-2 rounded-lg cursor-pointer"
              style={{
                color: "rgb(255,255,255,0.6)",
                filter: "drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.14))",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="w-full flex justify-end">
        <div
          className="bg-memberName w-4/12 py-2 flex items-center gap-2 px-4 rounded-lg"
          style={{
            filter: "drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.14))",
          }}
        >
          <img src={membersearch} alt="icon" />
          <input
            type="text"
            placeholder="Search here"
            className="bg-transparent border-none outline-none w-full"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
