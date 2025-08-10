import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Tables from "../../components/Tables";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFormCart } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div>
      <Tables />
    </div>
  );
};

export default Cart;
