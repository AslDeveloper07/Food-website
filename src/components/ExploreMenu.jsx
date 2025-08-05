import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";
import { div } from "framer-motion/client";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div>
      <h1 className=" text-[24px] font-medium">Explore our menu</h1>
      <p className="w-[710px] mt-2 mb-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ipsam
        vero, tempora voluptas ea in. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit.
      </p>
      <div className="flex justify-between text-center ">
        {menu_list.map((items, inx) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === items.menu_name ? "All" : items.menu_name
                )
              }
              key={inx}
            >
              <img
                src={items.menu_image}
                alt={items.menu_name}
                className={`
   rounded-full p-[2px]
    border-[3px] transition-all duration-300 cursor-pointer
    ${
      category === items.menu_name
        ? "border-orange-500 scale-97"
        : "border-transparent"
    }
  `}
              />
              <p className="mt-2 text-gray-500">{items.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
