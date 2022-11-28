import React, { useState } from "react";
import ServerMemberContent from "../components/ServerMemberContent";
import Sidebar from "../components/Sidebar";

const AccountSetting = () => {
  const [hide, setHide] = useState(false);
  const hideandseek = () => {
    setHide(!hide);
  };

  return (
    <div className="flex justify-between">
      <Sidebar hide={hide} />
      <ServerMemberContent hideandseek={hideandseek} />
    </div>
  );
};

export default AccountSetting;
