import { useState } from "react";
import ServerContent from "../components/ServerContent";
import Sidebar from "../components/Sidebar";

const ServerSettings = () => {
  const [hide, setHide] = useState(false);
  const hideandseek = () => {
    setHide(!hide);
  };

  return (
    <div className="flex justify-between">
      <Sidebar hide={hide} />
      <ServerContent hideandseek={hideandseek} />
    </div>
  );
};

export default ServerSettings;
