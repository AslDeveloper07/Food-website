import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import { icons } from "../assets/frontend_assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {

  const [itemCount, setItemCount]=useState(0)
  return (
    <div className="w-[280px] flex flex-col gap-3 rounded-2xl border border-4-1px border-[#4d4d4d23] overflow-hidden hover:shadow-[0px_3px_8px_0px_rgba(34,60,80,0.2)] cursor-pointer transition duration-300">
      <div>
        <img src={image} alt="" className="" />
      </div>
      <div className="py-1 px-3 pb-4">
        <div className="flex justify-between items-center mb-3">
          <p className="font-samibold">{name}</p>
          <img className="w-[70px]" src={icons.rating_starts} alt={name} />
        </div>
        <p className="text-[13px] mb-4">{description}</p>
        <p className="text-orange-500 font-semibold">$ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
