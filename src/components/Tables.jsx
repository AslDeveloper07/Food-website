import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Tables = () => {
  const { food_list, cartItems, removeFormCart } = useContext(StoreContext);

  return (
    <div>
      <div>
        <div>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((CartItemList, i) => {
          if (cartItems[CartItemList._id] > 0) {
            return (
              <div>
                <img src={CartItemList.image} alt="" />
                <p>{CartItemList.name}</p>
                <p>{CartItemList.price}</p>
                <p>{CartItemList[CartItemList._id]}</p>
                <p>{CartItemList.price * cartItems[CartItemList._id]}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Tables;
