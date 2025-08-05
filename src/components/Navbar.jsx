import { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import { icons } from "../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="flex justify-between items-center container py-[20px]">
      <img src={icons.logo} alt="" className="w-[120px]" />
      <ul className="nav flex justify-between gap-4">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact-Us
        </li>
      </ul>

      <div className="flex justify-between items-center gap-6">
        <img
          src={icons.search_icon}
          alt=""
          className="w-[23px] cursor-pointer"
        />
        <div className="relative">
          <img
            src={icons.basket_icon}
            alt=""
            className="w-[23px] cursor-pointer"
          />
          <div className="absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-4xl top-[4px] right-[-5px]"></div>
        </div>
        <button className="transparent border border-4-[1px] py-2 px-6 rounded-4xl text-[15px] cursor-pointer hover:bg-orange-100 transition duration-300">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
