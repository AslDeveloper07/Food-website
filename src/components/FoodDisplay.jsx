import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="" id="food-display">
      <h2>Top dishes near you</h2>

      <div>
        {
          food_list.map((food, i)=>{
            return <FoodItem key={i} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image} />
          })
        }
      </div>
    </div>
  );
};

export default FoodDisplay;
