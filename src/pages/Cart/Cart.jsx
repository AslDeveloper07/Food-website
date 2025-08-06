import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Tables from "../../components/Tables";

const Cart = () => {
  const { food_list, cartItems, removeFormCart } = useContext(StoreContext);

  return (
    <div>
      <Tables />
    </div>
  );
};

export default Cart;
