import Logo from "../assets/logo.png";
import Arrow from "../assets/arrow.png";
import { NavLink } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <div
      className="px-8 relative z-10"
      style={{
        background: "linear-gradient(90deg, #0C0C10 9.9%, #5E17EB 100%)",
        boxShadow: " 0px 4px 69px rgba(0, 0, 0, 0.54)",
      }}
    >
      {/* Content */}
      <div className="flex justify-between items-center z-[10000]">
        {/* Left */}
        <div>
          {/* Logo */}
          <img src={Logo} alt="site_logo" className="w-32" />
        </div>
        {/* Right */}
        <div className="flex gap-14">
          {/* Nav Links */}
          <div className="flex gap-12 items-center">
            <p className="text-white font-medium cursor-pointer">
              Terms of Service & Privacy
            </p>
            <p className="text-white font-medium cursor-pointer">
              Support Service
            </p>
          </div>

          {/* Button */}
          <NavLink to="/server/settings">
            <button
              style={{
                filter: "drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.43))",
              }}
              className="bg-LoginNavbarBtn text-white py-[9px] px-6 flex items-center gap-2 rounded-tl-2xl rounded-br-2xl text-[15px] font-bold"
            >
              LOGIN <img src={Arrow} alt="btn_arrow" className="w-4" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;
