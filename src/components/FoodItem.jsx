import React, { useContext } from "react";
import { assets } from "../assets/admin_assets/assets";
import { icons } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFormCart } = useContext(StoreContext);

  return (
    <div className="w-[280px] flex flex-col gap-3 rounded-xl border border-4-1px border-[#4d4d4d23] overflow-hidden hover:shadow-[0px_3px_8px_0px_rgba(34,60,80,0.2)] cursor-pointer transition duration-300">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="transform hover:scale-103 transition duration-300"
        /> 
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={icons.add_icon_white}
            alt=""
            className="w-[35px] absolute bottom-[10px] right-[10px] cursor-pointer rounded-2xl"
          />
        ) : (
          <div className="absolute bottom-[10px] right-[10px] flex items-center gap-3 p-1 rounded-[30px] bg-white">
            <img
              onClick={() => removeFormCart(id)}
              src={icons.remove_icon_red}
              alt=""
              className="w-[30px]"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={icons.add_icon_green}
              alt=""
              className="w-[30px]"
            />
          </div>
        )}
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
