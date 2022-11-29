import React from "react";

const VerifyCard = ({ notShow }) => {
  return (
    <div>
      {/* Upper */}
      <div className="flex justify-between gap-10">
        {/* Name Box */}
        <div
          className="w-5/12 py-3 px-12 flex justify-between bg-memberName rounded-lg"
          style={{
            filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.28))",
          }}
        >
          <span
            className="font-extrabold text-[17px]"
            style={{
              color: "rgb(255,255,255, 0.6)",
            }}
          >
            Name:
          </span>
          <span className="font-bold text-[17px] text-HeaderTheme">Hubify</span>
        </div>

        {/* Verify Link Box */}
        <div
          className="w-7/12 py-3 px-12 flex justify-between bg-memberName rounded-lg"
          style={{
            filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.28))",
          }}
        >
          <span
            className="font-extrabold text-[17px]"
            style={{
              color: "rgb(255,255,255, 0.6)",
            }}
          >
            Verify Link:
          </span>
          <span className="font-bold text-[17px] text-HeaderTheme cursor-pointer">
            <a
              href="https://verifynowonline.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://verifynowonline.com/
            </a>
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 flex justify-between">
        {/* Left Button */}
        <div className="flex items-center gap-4">
          {!notShow && (
            <button
              className="font-semibold px-4 py-2 rounded-md"
              style={{
                background: "rgba(0, 196, 207, 0.53)",
                color: "rgb(255,255,255, 0.7)",
                filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3))",
              }}
            >
              Recover member from old Hubify
            </button>
          )}
          <button
            className="font-semibold px-4 py-2 rounded-md"
            style={{
              background: "rgba(0, 196, 207, 0.53)",
              color: "rgb(255,255,255, 0.7)",
              filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3))",
            }}
          >
            Add Bot
          </button>
        </div>
        {/* Button Right */}
        <div className="flex items-center gap-4">
          <button
            className="font-semibold px-4 py-2 rounded-md bg-lightPink"
            style={{
              color: "rgb(255,255,255, 0.7)",
              filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3))",
            }}
          >
            Change
          </button>
          <button
            className="font-semibold px-4 py-2 rounded-md text-lightPink border border-lightPink"
            style={{
              filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3))",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCard;
