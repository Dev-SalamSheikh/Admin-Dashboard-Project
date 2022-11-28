import CardLine from "../assets/cardLine.png";
import Header from "./Header";
import Navbar from "./Navbar";
import CopyrightFooter from "./CopyrightFooter";
import circle from "../assets/circle.png";
import { useState } from "react";

const ServerContent = ({ hideandseek }) => {
  const [serverName, setServerName] = useState("");

  // Onsubmit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (serverName.length >= 1) {
      alert(`Successfully Created a server called "${serverName}"`);
    }
    setServerName("");
  };

  return (
    <div className="bg-LoginContainer w-full min-h-screen relative overflow-x-hidden">
      {/* Calling Navbar */}
      <Navbar hideandseek={hideandseek} />

      {/* Components */}
      <div className="mx-10 mt-10">
        {/* Heading Components */}
        <div>
          <Header category="Server." option="Settings" />
        </div>

        {/* Cards */}
        <div className="content_container p-16">
          <div className="card w-6/12 mx-auto my-16 px-16 pt-24 pb-24 rounded-md">
            <div className="card_content flex-col"></div>
            <div className="relative z-[100]">
              {/* Heading */}
              <div className="w-full pb-16">
                <div className="w-max mx-auto">
                  <h1
                    className="text-3xl font-semibold"
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Create Server
                  </h1>
                  <img src={CardLine} alt="card_line" className="mt-2" />
                </div>
              </div>

              {/* Form */}
              <div className="">
                <form onSubmit={submitHandler}>
                  <span
                    className="text-lg font-semibold"
                    style={{
                      color: "rgb(255,255,255, 0.6)",
                    }}
                  >
                    Server Name
                  </span>
                  {/* Input Div */}
                  <div
                    className="w-full rounded-md py-3 mt-2"
                    style={{
                      border: "1px solid rgb(255,255,255, 0.6)",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Enter Server Name"
                      className="w-full bg-transparent px-3 rounded-md outline-none border-none"
                      style={{ color: "rgb(255,255,255, 0.6)" }}
                      value={serverName}
                      onChange={(e) => setServerName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Button Div */}
                  <div className="mt-16 text-end">
                    <button
                      type="submit"
                      className="text-white font-semibold text-lg py-3 px-8"
                      style={{
                        background: "linear-gradient(0deg, #00C1CA, #00C1CA)",
                        borderRadius: "11px",
                        filter: "drop-shadow(0px 4px 27px rgba(0, 0, 0, 0.23))",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
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

export default ServerContent;
