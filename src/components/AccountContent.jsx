import CardLine from "../assets/cardLine.png";
import Header from "./Header";
import Navbar from "./Navbar";
import CopyrightFooter from "./CopyrightFooter";
import Unlock from "../assets/unlock.png";
import circle from "../assets/circle.png";
import { useState } from "react";

const AccountContent = ({ hideandseek }) => {
  const [accountInfo, setAccountInfo] = useState({
    username: "",
    subExpire: "",
    mode: "",
    password: "",
    email: "",
    newUsername: "",
  });

  // Onsubmit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`
    You have set your new info,
    username : ${accountInfo.username},
    Subscription Expired : ${accountInfo.subExpire},
    Password : ${accountInfo.password},
    Email : ${accountInfo.email},
    New Username : ${accountInfo.newUsername},
    `);
    setAccountInfo({
      username: "",
      subExpire: "",
      mode: "",
      password: "",
      email: "",
      newUsername: "",
    });
  };

  return (
    <div className="bg-LoginContainer w-full min-h-screen relative overflow-x-hidden">
      {/* Calling Navbar */}
      <Navbar hideandseek={hideandseek} />

      {/* Components */}
      <div className="mx-10 mt-10">
        {/* Heading Components */}
        <div>
          <Header category="Account." option="Settings" />
        </div>

        {/* Cards */}
        <div className="content_container p-16">
          <div className="card w-9/12 mx-auto my-16 px-6 py-8 rounded-md">
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
                  {/* First Group */}
                  <div className="flex justify-between items-center gap-6 mb-6">
                    {/* Username */}
                    <div className="w-6/12">
                      <span
                        className=""
                        style={{
                          color: "rgb(255,255,255, 0.6)",
                        }}
                      >
                        Username
                      </span>
                      {/* Input Div */}
                      <div
                        className="w-full rounded-md py-2 mt-2"
                        style={{
                          border: "1px solid rgb(255,255,255, 0.6)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Username"
                          className="w-full bg-transparent px-3 rounded-md outline-none border-none text-sm"
                          style={{ color: "rgb(255,255,255, 0.6)" }}
                          required
                          value={accountInfo.username}
                          onChange={(e) =>
                            setAccountInfo({
                              ...accountInfo,
                              username: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Subscription */}
                    <div className="w-6/12">
                      <span
                        className=""
                        style={{
                          color: "rgb(255,255,255, 0.6)",
                        }}
                      >
                        Subscription Expires
                      </span>
                      {/* Input Div */}
                      <div
                        className="w-full rounded-md py-2 mt-2"
                        style={{
                          border: "1px solid rgb(255,255,255, 0.6)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="N/A - not premium"
                          className="w-full bg-transparent px-3 rounded-md outline-none border-none text-sm"
                          style={{ color: "rgb(255,255,255, 0.6)" }}
                          required
                          value={accountInfo.subExpire}
                          onChange={(e) =>
                            setAccountInfo({
                              ...accountInfo,
                              subExpire: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second Group */}
                  <div className="flex justify-between items-center gap-6 mb-6">
                    {/* Darkmode */}
                    <div className="w-6/12">
                      <span
                        className=""
                        style={{
                          color: "rgb(255,255,255, 0.6)",
                        }}
                      >
                        Darkmode
                      </span>
                      {/* Input Div */}
                      <div
                        className="w-full rounded-md py-2 mt-2"
                        style={{
                          border: "1px solid rgb(255,255,255, 0.6)",
                        }}
                      >
                        <select
                          className="bg-transparent outline-none border-none w-full text-white px-3 text-sm"
                          style={{ color: "rgb(255,255,255, 0.6)" }}
                          value={accountInfo.mode}
                          onChange={(e) =>
                            setAccountInfo({
                              ...accountInfo,
                              mode: e.target.value,
                            })
                          }
                        >
                          <option value="enable">Enable</option>
                          <option value="disable">Disable</option>
                        </select>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="w-6/12">
                      <span
                        className=""
                        style={{
                          color: "rgb(255,255,255, 0.6)",
                        }}
                      >
                        Password
                      </span>
                      {/* Input Div */}
                      <div
                        className="w-full rounded-md py-2 mt-2"
                        style={{
                          border: "1px solid rgb(255,255,255, 0.6)",
                        }}
                      >
                        <input
                          type="password"
                          placeholder="Enter new password"
                          className="w-full bg-transparent px-3 rounded-md outline-none border-none text-sm"
                          style={{ color: "rgb(255,255,255, 0.6)" }}
                          required
                          value={accountInfo.password}
                          onChange={(e) =>
                            setAccountInfo({
                              ...accountInfo,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Third Group */}
                  <div className="flex justify-between items-center gap-6 mb-6">
                    {/* Email */}
                    <div className="w-6/12">
                      <span
                        className=""
                        style={{
                          color: "rgb(255,255,255, 0.6)",
                        }}
                      >
                        Email
                      </span>
                      {/* Input Div */}
                      <div
                        className="w-full rounded-md py-2 mt-2"
                        style={{
                          border: "1px solid rgb(255,255,255, 0.6)",
                        }}
                      >
                        <input
                          type="email"
                          placeholder="Enter new email"
                          className="w-full bg-transparent px-3 rounded-md outline-none border-none text-sm"
                          style={{ color: "rgb(255,255,255, 0.6)" }}
                          required
                          value={accountInfo.email}
                          onChange={(e) =>
                            setAccountInfo({
                              ...accountInfo,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Username */}
                    <div className="w-6/12">
                      <span
                        className=""
                        style={{
                          color: "rgb(255,255,255, 0.6)",
                        }}
                      >
                        Username
                      </span>
                      {/* Input Div */}
                      <div
                        className="w-full rounded-md py-2 mt-2"
                        style={{
                          border: "1px solid rgb(255,255,255, 0.6)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Enter new username"
                          className="w-full bg-transparent px-3 rounded-md outline-none border-none text-sm"
                          style={{ color: "rgb(255,255,255, 0.6)" }}
                          required
                          value={accountInfo.newUsername}
                          onChange={(e) =>
                            setAccountInfo({
                              ...accountInfo,
                              newUsername: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Button Div */}
                  <div className="mt-16 flex justify-end items-center gap-4">
                    <button
                      className="text-white font-semibold flex items-center gap-2 px-4"
                      style={{
                        background: "linear-gradient(0deg, #5E17EB, #5E17EB)",
                        borderRadius: "11px",
                        filter: "drop-shadow(0px 4px 27px rgba(0, 0, 0, 0.23))",
                      }}
                    >
                      <img src={Unlock} alt="unlock_icon" className="w-5" />
                      Enable 2FA
                    </button>
                    <button
                      type="submit"
                      className="text-white font-semibold py-[10px] px-10"
                      style={{
                        background: "linear-gradient(0deg, #00C1CA, #00C1CA)",
                        borderRadius: "11px",
                        filter: "drop-shadow(0px 4px 27px rgba(0, 0, 0, 0.23))",
                      }}
                    >
                      SAVE
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

export default AccountContent;
