import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {

  const {food_list, cartItems, removeFormCart}=useContext(StoreContext)

  return (
    <div>
      <div>
        <div>
          <p className="text-black">Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id] > 0}</p>
                <p>{item.price * cartItems[item._id] > 0}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
