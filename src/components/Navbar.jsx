import hamburger from "../assets/hamburger.png";
import search from "../assets/search.png";
import notification from "../assets/notification.png";
import message from "../assets/message.png";
import avatar from "../assets/sidebarAvatar.png";
import DropdownIcon from "../assets/arrowdown.png";

const Navbar = ({ hideandseek }) => {
  return (
    <div
      className="py-3 px-8 w-full h-max"
      style={{
        background:
          "linear-gradient(90.62deg, #0C0C10 58.7%, rgba(94, 23, 235, 1) 114.83%)",
        boxShadow: "0px 27px 26px rgba(0, 0, 0, 0.18)",
      }}
    >
      <div className="flex justify-between">
        {/* Hamburger Menu */}
        <div
          className="bg-[#5E17EB] w-max p-2 cursor-pointer flex justify-center items-center"
          onClick={hideandseek}
        >
          <img src={hamburger} alt="hamburger" />
        </div>

        {/* Right Side */}
        <div className="flex gap-3">
          {/* SearchIcon */}
          <div
            className="flex justify-center items-center cursor-pointer"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.8)",
              borderRadius: "5px",
              width: "max-content",
              padding: "3px 10px",
            }}
          >
            <img src={search} alt="search_icon" className="w-5" />
          </div>

          {/* SearchIcon */}
          <div
            className="flex justify-center items-center cursor-pointer"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.8)",
              borderRadius: "5px",
              width: "max-content",
              padding: "2px 10px",
            }}
          >
            <img src={notification} alt="search_icon" className="w-5" />
          </div>

          {/* SearchIcon */}
          <div
            className="flex justify-center items-center cursor-pointer"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.8)",
              borderRadius: "5px",
              width: "max-content",
              padding: "3px 10px",
            }}
          >
            <img src={message} alt="search_icon" className="w-5" />
          </div>

          {/* Avatar Part */}
          <div
            className="flex items-center gap-1 rounded-[5px] pl-1 pr-6 cursor-pointer"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.8)",
            }}
          >
            {/* Left */}
            <div>
              <img src={avatar} alt="" className="w-10" />
            </div>

            {/* Right */}
            <div>
              <p
                className="text-sm"
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Wade Warren
              </p>
              <div className="flex justify-between items-center">
                <span
                  className="text-xs"
                  style={{
                    color: "rgba(255, 255, 255, 0.4)",
                  }}
                >
                  Admin
                </span>
                <img src={DropdownIcon} alt="" className="w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
