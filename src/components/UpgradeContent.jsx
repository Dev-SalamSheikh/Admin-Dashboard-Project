import Header from "./Header";
import Navbar from "./Navbar";
import CopyrightFooter from "./CopyrightFooter";
import circle from "../assets/circle.png";
import upgradeline from "../assets/upgradeline.png";
import whiteline from "../assets/whiteline.png";
import Lock from "../assets/Lock.png";
import okay from "../assets/okay.png";
import Bookmark from "../assets/Bookmark.png";
import no from "../assets/no.png";
import Unlock from "../assets/unlock.png";

const UpgradeContent = ({ hideandseek }) => {
  return (
    <div className="bg-LoginContainer w-full min-h-screen relative overflow-x-hidden">
      {/* Calling Navbar */}
      <Navbar hideandseek={hideandseek} />

      {/* Components */}
      <div className="mx-10 mt-10">
        {/* Heading Components */}
        <div>
          <Header category="Account." option="Upgrade" />
        </div>

        {/* Cards */}
        <div className="content_container px-16">
          <div className="w-8/12 mx-auto my-16 px-16 pt-24 pb-24 rounded-md">
            <div className="relative z-[100]">
              {/* Card */}
              <div className="flex justify-between gap-16">
                {/* Already Have Div */}
                <div className="w-6/12 pt-2 pb-10 px-4 border-buttonBorder border-2 rounded-xl">
                  {/* Badge */}
                  <div className="text-end">
                    <span
                      style={{
                        color: "rgb(255,255,255, 0.8)",
                      }}
                      className="bg-buttonBorder px-2 pb-[4px] rounded-full"
                    >
                      Free
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex flex-col justify-center w-full items-center my-8">
                    <h1 className="text-2xl font-semibold text-white">
                      Free Upgrade
                      <img src={upgradeline} alt="" className="mt-1" />
                    </h1>
                  </div>

                  {/* List Items */}
                  <div className="flex flex-col gap-6">
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        25 Members
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        1 Server
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={no} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        IP Ban
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={no} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        VPN Check
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        Limited Support
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={no} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        Verification Logos
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-12 flex justify-center">
                    <button
                      className="text-white font-semibold flex items-center gap-2 px-4 cursor-pointer w-max bg-buttonBorder"
                      style={{
                        borderRadius: "11px",
                        filter: "drop-shadow(0px 4px 27px rgba(0, 0, 0, 0.23))",
                      }}
                    >
                      <img src={Unlock} alt="unlock_icon" className="w-5" />
                      Enable 2FA
                    </button>
                  </div>
                </div>

                {/* Purchase Div */}
                <div
                  className="w-6/12 pt-2 pb-10 px-4 border-buttonBorder border-2 rounded-xl relative"
                  style={{
                    background:
                      "linear-gradient(179.73deg, #00C1CA 0.13%, #5E17EB 97.76%)",
                  }}
                >
                  {/* Bookmark Top */}
                  <di className="absolute -top-4 right-1">
                    <img src={Bookmark} alt="" className="w-20" />
                  </di>

                  {/* Badge */}
                  <div className="text-end">
                    <span
                      style={{
                        color: "rgb(255,255,255, 0.8)",
                      }}
                      className="bg-buttonBorder px-2 pb-[4px] rounded-full"
                    >
                      &nbsp;
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex flex-col justify-center w-full items-center my-8">
                    <h1 className="text-2xl font-semibold text-white">
                      Premium
                      <img src={whiteline} alt="" className="mt-1" />
                    </h1>
                  </div>

                  {/* List Items */}
                  <div className="flex flex-col gap-6">
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        25 Members
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        1 Server
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        IP Ban
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        VPN Check
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        Limited Support
                      </span>
                    </div>
                    {/* Items */}
                    <div className="flex gap-4 items-center">
                      <img src={okay} alt="yes" className="w-5" />
                      <span className="text-white font-semibold text-[17px]">
                        Verification Logos
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-12 flex justify-center">
                    <button
                      className="text-lightPink font-semibold flex items-center gap-2 px-4 py-2 cursor-pointer w-max bg-white"
                      style={{
                        borderRadius: "11px",
                        filter: "drop-shadow(0px 4px 27px rgba(0, 0, 0, 0.23))",
                      }}
                    >
                      <img src={Lock} alt="unlock_icon" className="w-5" />
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shapes */}
        <div className="absolute right-[-13%] top-[30%] rotate-45">
          <img src={circle} alt="circle" />
        </div>

        {/* Footer */}
        <div className="mt-4">
          <CopyrightFooter />
        </div>
      </div>
    </div>
  );
};

export default UpgradeContent;
