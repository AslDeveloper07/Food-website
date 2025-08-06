import { useContext, useState } from "react";
import { icons } from "../assets/frontend_assets/assets";
import { Link, Links } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount}= useContext(StoreContext)
  return (
    <div className="flex justify-between items-center container py-[20px]">
      <img src={icons.logo} alt="logo" className="w-[120px]" />
      <ul className="nav flex justify-between gap-8">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "text-orange-500 " : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "text-orange-500 " : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "text-orange-500 " : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "text-orange-500 " : ""}
        >
          Contact-Us
        </a>
      </ul>

      <div className="flex justify-between items-center gap-6">
        <Link to='/'>
        <img
          src={icons.search_icon}
          alt="search"
          className="w-[20px] cursor-pointer"
        />
        </Link>
        <div className="relative">
          <Link to="/cart">
          <img
            src={icons.basket_icon}
            alt="basket"
            className="w-[23px] cursor-pointer"
          />
          </Link>

  <div className="absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-full top-[4px] right-[-5px]"></div>


        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="border py-2 px-6 rounded-full text-[15px] cursor-pointer hover:bg-orange-100 transition duration-300"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
