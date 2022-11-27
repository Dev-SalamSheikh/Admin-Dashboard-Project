import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ServerSettings = () => {
  return (
    <div className="flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default ServerSettings;
