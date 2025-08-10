import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="" id="food-display">
      <h2 className="mt-13 mb-4 text-2xl font-semibold">Top dishes near you</h2>

      <div className="container flex-wrap flex gap-6 justify-center">
        {food_list.map((food, i) => {
          {
            console.log(category, food.category);
          }
          if (category === "All" || category === food.category) {
            return (
              <FoodItem
                key={i}
                id={food.id}
                name={food.name}
                description={food.description}
                price={food.price}
                image={food.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
