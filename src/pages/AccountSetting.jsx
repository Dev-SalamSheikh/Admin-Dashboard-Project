import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AccountSetting = () => {
  const [hide, setHide] = useState(false);
  const hideandseek = () => {
    setHide(!hide);
  };

  return (
    <div className="flex justify-between">
      <Sidebar hide={hide} />
      <Navbar hideandseek={hideandseek} />
    </div>
  );
};

export default AccountSetting;
