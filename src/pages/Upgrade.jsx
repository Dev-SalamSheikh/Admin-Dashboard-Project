import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UpgradeContent from "../components/UpgradeContent";

const Upgrade = () => {
  const [hide, setHide] = useState(false);
  const hideandseek = () => {
    setHide(!hide);
  };

  return (
    <div className="flex justify-between">
      <Sidebar hide={hide} />
      <UpgradeContent hideandseek={hideandseek} />
    </div>
  );
};

export default Upgrade;
