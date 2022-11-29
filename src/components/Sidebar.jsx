import Logo from "../assets/sidebarlogo.png";
import DropdownIcon from "../assets/arrowdown.png";
import Settings from "../assets/settings.png";
import SingleUser from "../assets/singleUser.png";
import blacklist from "../assets/blacklist.png";
import upgrade from "../assets/upgrade.png";
import dot from "../assets/dot.png";
import threeDot from "../assets/3dot.png";
import avatar from "../assets/sidebarAvatar.png";
import { NavLink } from "react-router-dom";

const Sidebar = ({ hide }) => {
  return (
    <div
      className={`min-h-screen w-[22%] text-white duration-300 scroll-smooth relative ${
        hide ? "ml-[-100%]" : ""
      }`}
      style={{
        background:
          "linear-gradient(179.66deg, #0C0C10 80.78%, #5E17EB 125.88%)",
      }}
    >
      {/* Logo Section */}
      <div>
        {/* Logo */}
        <div className="w-full flex items-center justify-center">
          <img src={Logo} alt="site_logo" className="w-[220px]" />
        </div>
      </div>

      {/* NavLinks */}
      <div className="px-6 mt-4 mb-8">
        {/* NavLink Header */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-textGray">Server</span>
          <img
            src={DropdownIcon}
            alt="dropdown_icon"
            className="w-5 cursor-pointer"
          />
        </div>
        {/* Childrens */}
        <div className="mt-2">
          {/* First */}
          <NavLink to="/server/settings">
            <div className="flex gap-3 items-center mx-4 px-4 py-[6px] my-2 cursor-pointer">
              <img
                src={Settings}
                alt="dropdown_icon"
                className="w-4 cursor-pointer"
              />
              <span className="text-base font-medium text-textGray">
                Settings
              </span>
            </div>
          </NavLink>

          {/* Secoond */}
          <NavLink to="/server/members">
            <div className="flex gap-3 items-center mx-4 px-4 py-[6px] my-2 cursor-pointer">
              <img
                src={SingleUser}
                alt="dropdown_icon"
                className="w-4 cursor-pointer"
              />
              <span className="text-base font-medium text-textGray">
                Members
              </span>
            </div>
          </NavLink>

          {/* Third */}
          <NavLink to="/server/blacklist">
            <div className="flex gap-3 items-center mx-4 px-4 py-[6px] my-2 cursor-pointer">
              <img
                src={blacklist}
                alt="dropdown_icon"
                className="w-4 cursor-pointer"
              />
              <span className="text-base font-medium text-textGray">
                Blacklist
              </span>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Second Childrens */}
      <div className="px-6">
        {/* NavLink Header */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-textGray">Account</span>
          <img
            src={DropdownIcon}
            alt="dropdown_icon"
            className="w-5 cursor-pointer"
          />
        </div>
        {/* Childrens */}
        <div className="mt-2">
          {/* First */}
          <NavLink to="/account/settings">
            <div
              className={`flex gap-3 items-center mx-4 px-4 py-[10px] my-2 cursor-pointer`}
            >
              <img
                src={Settings}
                alt="dropdown_icon"
                className="w-4 cursor-pointer"
              />
              <span className="text-base font-medium text-textGray">
                Settings
              </span>
            </div>
          </NavLink>

          {/* Secoond */}
          <NavLink to="/">
            <div className="flex gap-3 items-center mx-4 px-4 py-[6px] my-2 cursor-pointer">
              <img
                src={upgrade}
                alt="dropdown_icon"
                className="w-4 cursor-pointer"
              />
              <span className="text-base font-medium text-textGray">
                Upgrade
              </span>
            </div>
          </NavLink>
        </div>
      </div>

      {/* User Card */}
      <div
        className="rounded-lg py-2 px-4 mx-6 mt-32 mb-8 absolute bottom-0"
        style={{
          background: "rgba(34, 40, 44, 0.7)",
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.21)",
        }}
      >
        {/* Icons */}
        <div className="flex justify-between items-center">
          <img src={dot} alt="" className="w-3" />
          <img src={threeDot} alt="" className="w-5 cursor-pointer" />
        </div>

        {/* Avatar */}
        <div className="relative flex justify-center z-10">
          <img src={avatar} alt="" className="w-32" />
          <div className="bg-LoginNavbarBtn w-24 h-24 rounded-full blur-xl opacity-50 absolute top-3 right-[30%] -z-10"></div>
        </div>

        {/* Name and Title */}
        <div>
          {/* Name */}
          <div>
            <h2 className="text-lg font-bold text-center">Wade Warren</h2>
          </div>

          {/* Emails */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-[13px] text-cardText">bessiec@gmail.com</span>
            <span className="text-buttonBorder"> | </span>
            <span className="text-[13px] text-cardText">websitename.com</span>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center mt-9 mb-6">
          <button
            className="py-[6px] px-6 font-medium"
            style={{
              background: "linear-gradient(90deg, #00C1CA 0%, #5E17EB 99.97%)",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
