import Header from "./Header";
import Navbar from "./Navbar";
import CopyrightFooter from "./CopyrightFooter";
import VerifyCard from "./VerifyCard";
import Buttons from "./Buttons";
import { useState } from "react";

const ServerMemberContent = ({ hideandseek }) => {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);

  // toggle States
  const pageOne = () => {
    setPage1(true);
    setPage2(false);
    setPage3(false);
  };
  const pagetwo = () => {
    setPage2(true);
    setPage1(false);
    setPage3(false);
  };
  const pagethree = () => {
    setPage3(true);
    setPage1(false);
    setPage2(false);
  };

  const data = [
    " 765452937982689235",
    " 765452937982689235",
    " 765452937982689235",
    " 765452937982689235",
  ];
  return (
    <div className="bg-LoginContainer w-full min-h-screen relative overflow-x-hidden">
      {/* Calling Navbar */}
      <Navbar hideandseek={hideandseek} />

      {/* Components */}
      <div className="mx-10 mt-10">
        {/* Heading Components */}
        <div>
          <Header category="Server." option="Members" />
        </div>

        {/* Upper Card */}
        <div
          className="w-11/12 bg-LoginContainer mx-auto my-16 rounded-md p-10"
          style={{
            boxShadow: "0px 4px 21px rgba(0, 0, 0, 0.39)",
          }}
        >
          <VerifyCard />
        </div>

        {/* Lower Card */}
        <div
          className="w-11/12 bg-LoginContainer mx-auto mb-20 rounded-md p-10"
          style={{
            boxShadow: "0px 4px 21px rgba(0, 0, 0, 0.39)",
          }}
        >
          {/* Buttons and Search Filter */}
          <div className="w-full">
            <Buttons />
          </div>

          {/* Informations */}
          <div className="mt-8 flex">
            {/* Left */}
            <div className="w-full">
              {/* Content Start */}
              <div>
                {/* Header */}
                <div className="w-full text-center bg-lightPink py-3 rounded-tl-lg">
                  <h2
                    className="text-2xl font-bold"
                    style={{
                      letterSpacing: "0.5px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    ID
                  </h2>
                </div>
                {/* Contents */}
                {data.map((item, i) => (
                  <div
                    key={i}
                    className="w-full py-5 pl-10"
                    style={{
                      background: "#302F35",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderTop: "none",
                      boxShadow: "0px 2px 21px rgba(0, 0, 0, 0.09)",
                    }}
                  >
                    <span
                      style={{
                        letterSpacing: "0.5px",
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="w-full">
              {/* Header */}
              <div
                className="w-full text-center bg-lightPink py-3 rounded-tr-lg"
                style={{
                  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <h2
                  className="text-2xl font-bold"
                  style={{
                    letterSpacing: "0.5px",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  Action
                </h2>
              </div>

              {/* Content */}
              <div>
                <div
                  className="w-full py-[12px] flex justify-center"
                  style={{
                    background: "#302F35",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderTop: "none",
                    borderLeft: "none",
                    boxShadow: "0px 2px 21px rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <div
                    className="bg-lightPink px-4 py-2 w-max rounded-md"
                    style={{
                      filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));",
                    }}
                  >
                    <select
                      className="bg-lightPink w-full"
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      <option value="message">Message</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>

                <div
                  className="w-full py-[12px] flex justify-center"
                  style={{
                    background: "#302F35",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderTop: "none",
                    borderLeft: "none",
                    boxShadow: "0px 2px 21px rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <div
                    className="bg-lightPink px-4 py-2 w-max rounded-md"
                    style={{
                      filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));",
                    }}
                  >
                    <select
                      className="bg-lightPink w-full"
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      <option value="message">Message</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>

                <div
                  className="w-full py-[12px] flex justify-center"
                  style={{
                    background: "#302F35",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderTop: "none",
                    borderLeft: "none",
                    boxShadow: "0px 2px 21px rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <div
                    className="bg-lightPink px-4 py-2 w-max rounded-md"
                    style={{
                      filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));",
                    }}
                  >
                    <select
                      className="bg-lightPink w-full"
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      <option value="message">Message</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>

                <div
                  className="w-full py-[12px] flex justify-center"
                  style={{
                    background: "#302F35",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderTop: "none",
                    borderLeft: "none",
                    boxShadow: "0px 2px 21px rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <div
                    className="bg-lightPink px-4 py-2 w-max rounded-md"
                    style={{
                      filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));",
                    }}
                  >
                    <select
                      className="bg-lightPink w-full"
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      <option value="message">Message</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paginations */}
          <div className="mt-16 flex justify-between items-center">
            {/* Left */}
            <div>
              <span
                className="bg-memberName py-[10px] px-5 rounded-lg"
                style={{
                  color: "rgb(255,255,255, 0.6)",
                  filter: "drop-shadow(0px 0px 18px rgba(0, 0, 0, 0.33))",
                }}
              >
                Showing 1 to 2 of 2 entries
              </span>
            </div>

            {/* right */}
            <div>
              <div
                className="border-lightPink border w-max rounded-lg bg-memberName flex items-center"
                style={{
                  color: "rgb(255,255,255, 0.6)",
                }}
              >
                <div className="px-3 text-sm py-1 cursor-pointer border-r-lightPink border-r">
                  Previous
                </div>
                <div
                  className={`px-2 text-sm py-1 cursor-pointer border-r-lightPink border-r ${
                    page1 && "bg-lightPink"
                  }`}
                  onClick={pageOne}
                >
                  1
                </div>
                <div
                  className={`px-2 text-sm py-1 cursor-pointer border-r-lightPink border-r ${
                    page2 && "bg-lightPink"
                  }`}
                  onClick={pagetwo}
                >
                  2
                </div>
                <div
                  className={`px-2 text-sm py-1 cursor-pointer border-r-lightPink border-r ${
                    page3 && "bg-lightPink"
                  }`}
                  onClick={pagethree}
                >
                  3
                </div>
                <div className="px-3 text-sm py-1 cursor-pointer border-r-lightPink border-r">
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <CopyrightFooter />
        </div>
      </div>
    </div>
  );
};

export default ServerMemberContent;
