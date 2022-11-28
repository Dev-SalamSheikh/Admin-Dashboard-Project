import React from "react";
import Navbar from "./Navbar";

const ServerContent = ({ hideandseek }) => {
  return (
    <div className="bg-LoginContainer w-full min-h-screen">
      {/* Calling Navbar */}
      <Navbar hideandseek={hideandseek} />

      {/* Components */}
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default ServerContent;
