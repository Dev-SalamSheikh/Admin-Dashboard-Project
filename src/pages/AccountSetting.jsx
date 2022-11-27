import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AccountSetting = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className="flex justify-between">
      <Sidebar hide={hide} setHide={setHide} />
      <Navbar hide={hide} setHide={setHide} />
    </div>
  );
};

export default AccountSetting;
