import React, { useState } from "react";
import { icons } from "../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed z-200 bg-[#2d2d2d86] w-full h-[100vh] top-0 left-0"
    >
      <form  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col py-7 px-8 w-[400px] h-fit z-50 shadow-md rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold ">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={icons.cross_icon}
            alt=""
            className="w-[15px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-4">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name"></input>
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="bg-orange-600 py-2 px-0 rounded-md text-white mt-4">
          {currState === "Sign Up" ? "Create account" : "Login  "}
        </button>
        <div className="flex items-center gap-2 justify-start mt-4">
          <input
            type="checkbox"
            className="w-4 h-4 accent-orange-500 cursor-pointer "
            required
          />
          <p className="text-[13px]">Lorem, ipsum dolor sit amet consectetur</p>
        </div>
        {currState === "Login" ? (
          <p className="text-xs text-center mt-4">
            Create new account
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-orange-500"
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p className="text-xs text-center mt-4">
            Already have an account?
            <span
              onClick={() => setCurrState("Login")}
              className="text-orange-500"
            >
              {" "}
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
