import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { icons } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className=" bg-[#303030] text-white pt-14 mt-20" id="footer">
      <div className="container flex justify-between">
        <div  className="w-[600px]">
          <img className="w-[130px] mb-4"  src={icons.logo} alt="" />
          <p className="text-[15px] mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            in, facilis sunt quas quidem odio quasi architecto, omnis veniam
            doloribus repellat officia atque quis sit nobis reprehenderit
            necessitatibus non ducimus?
          </p>
          <div className="flex mb-15 gap-4">
            <img className="w-[30px]" src={icons.facebook_icon} alt="" />
            <img className="w-[30px]" src={icons.twitter_icon} alt="" />
            <img className="w-[30px]" src={icons.linkedin_icon} alt="" />
          </div>
        </div>
        <div>
           <h2 className="font-bold mb-3 text-md  text-orange-600">Company</h2>
           <ul className="text-[15px]">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div>
          <h2 className="font-bold mb-3 text-md text-orange-600">GET IN TOUCH </h2>
          <ul  className="text-[15px]">
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="container py-4 text-[15px]">
        Copyright 2024 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
