import React, { useState } from "react";
import AccountContent from "../components/AccountContent";
import Sidebar from "../components/Sidebar";

const AccountSetting = () => {
  const [hide, setHide] = useState(false);
  const hideandseek = () => {
    setHide(!hide);
  };

  return (
    <div className="flex justify-between">
      <Sidebar hide={hide} />
      <AccountContent hideandseek={hideandseek} />
    </div>
  );
};

export default AccountSetting;
