import React, { useState } from "react";
import AccountContent from "../components/AccountContent";

const AccountSetting = () => {
  const [hide, setHide] = useState(false);
  const hideandseek = () => {
    setHide(!hide);
  };

  return (
    <div className="flex justify-between">
      <AccountContent hideandseek={hideandseek} hide={hide} />
    </div>
  );
};

export default AccountSetting;
