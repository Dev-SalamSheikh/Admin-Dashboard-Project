import hamburger from "../assets/hamburger.png";

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
      <div>
        {/* Hamburger Menu */}
        <div>
          <div
            className="bg-[#5E17EB] w-max p-2 cursor-pointer"
            onClick={hideandseek}
          >
            <img src={hamburger} alt="hamburger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
