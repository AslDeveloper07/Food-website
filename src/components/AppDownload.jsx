import React from "react";
import { icons } from "../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div id="app-download">
      <p className="text-center text-3xl font-semibold mt-[80px]">
        For Better Experience Download <br /> Tomoto App
      </p>
      <div className="flex justify-center gap-3 mt-6">
        <img
          className="w-[150px] transform hover:scale-105 transition duration-300 cursor-pointer"
          src={icons.app_store}
          alt="App Store"
        />
        <img
          className="w-[150px] transform hover:scale-105 transition duration-300 cursor-pointer"
          src={icons.play_store}
          alt="Play Store"
        />
      </div>
    </div>
  );
};

export default AppDownload;
