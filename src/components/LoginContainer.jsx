import Dot from "../assets/dot.png";
import Line from "../assets/line.png";
import User from "../assets/user.png";
import member from "../assets/member.png";
import server from "../assets/server.png";
import LoginSmallCard from "./LoginSmallCard";

const LoginContainer = () => {
  return (
    <div className="py-[80px]">
      <div className="container mx-auto">
        {/* Backup Container */}
        {/* Card Container */}
        <div className="flex justify-center">
          <div className="bg-LoginCard w-5/12 py-8 rounded-xl text-center">
            {/* Heading */}
            <div className="flex gap-1 items-center justify-center">
              <h1 className="text-white text-4xl font-semibold">
                Backup Discord Server Members{" "}
              </h1>
              <img src={Dot} alt="dot" className="w-[10px] h-[10px] mt-3" />
            </div>

            {/* Line */}
            <div className="flex justify-center my-2">
              <img src={Line} alt="line" className="w-40" />
            </div>

            {/* Paragraph */}
            <div className="px-4">
              <p
                className="text-textGray text-[18px]"
                //   style={{ lineHeight: "29px" }}
              >
                Add your server members to new server or back to the existing
                one in the event of a server raid or deletion.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-8 mt-12">
              <button className="bg-LoginNavbarBtn text-white font-semibold py-[6px] outline-none border-none px-8 rounded-md">
                <span>Add to Discord</span>
              </button>
              <button className="text-white font-semibold py-[6px] px-5 rounded-md border-2 border-buttonBorder">
                <span>Join the Support Server</span>
              </button>
            </div>
          </div>
        </div>
        <div className="content w-5/12 mt-12 mb-[115px] mx-auto rounded-xl text-center">
          {/* Calling the components */}
          <LoginSmallCard img={User} number="7" type="Users" />
          <LoginSmallCard img={member} number="7" type="Members" />
          <LoginSmallCard img={server} number="4" type="Servers" />
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
