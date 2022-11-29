import React, { useState } from "react";
import BlacklistComponent from "../components/BlacklistComponent";
import Sidebar from "../components/Sidebar";

const Blacklist = () => {
  const [hide, setHide] = useState(false);
  const hideandseek = () => {
    setHide(!hide);
  };

  return (
    <div className="flex justify-between">
      <Sidebar hide={hide} />
      <BlacklistComponent hideandseek={hideandseek} />
    </div>
  );
};

export default Blacklist;
