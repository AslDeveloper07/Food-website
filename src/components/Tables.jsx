import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Tables = () => {
  const { food_list, cartItems, removeFormCart, getTotalCartAmount } =
    useContext(StoreContext);

  const deliveryFee = 2;

  const cartItemsList = food_list.filter((item) => cartItems[item._id] > 0);

  const subtotal = cartItemsList.reduce((total, item) => {
    return total + item.price * cartItems[item._id];
  }, 0);

  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-6 font-semibold text-gray-700 mb-4  border-b border-slate-300 pb-2">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {cartItemsList.length > 0 ? (
        cartItemsList.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-6 items-center gap-4 mb-4 border-b border-slate-300 pb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>${item.price * cartItems[item._id]}</p>
            <button
              onClick={() => removeFormCart(item._id)}
              className="text-red-600 text-lg font-bold"
            >
              ×
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-6 text-center">Cart is empty.</p>
      )}

      {/* Totals and Promo Code */}
      <div className="flex justify-between gap-15 mt-12 ">
        <div className="w-[500px]">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2 border-b  border-slate-300 py-2">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="flex justify-between mb-2 border-b border-slate-300 py-2">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() + 2}</p>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <button onClick={()=>navigate('/order')} className="bg-orange-600 hover:bg-orange-700 text-white mt-6 py-2 px-6 rounded-md transition duration-300">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="max-w-[600px]">
          <p className="mb-2 font-medium">
            If you have a promo code, Enter it here
          </p>
          <div className="relative flex h-10  w-full   bg-white rounded-lg ">
            <input
              type="email"
              placeholder="Promo Code"
              required
              className="h-full w-full rounded-lg border border-slate-300 bg-transparent px-3 pr-[70px] text-sm font-normal text-slate-700 outline-none transition-all duration-150 ease-in-outpeer"
            />
            <button
              type="button"
              className="absolute right-1 top-1 bottom-1 z-10 w-[65px] rounded-[4px] bg-orange-500 text-white px-2 py-1 text-[12px] font-semibold uppercase transition-all duration-500 ease-in-out cursor-pointer "
            >
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
