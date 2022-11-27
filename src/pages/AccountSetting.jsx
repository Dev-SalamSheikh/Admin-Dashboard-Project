import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AccountSetting = () => {
  return (
    <div className="flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Navbar />
      </div>
    </div>
  );
};

export default AccountSetting;
