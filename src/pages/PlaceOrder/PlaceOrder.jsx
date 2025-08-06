import React, { useContext } from "react";
import StoreContextProvider, { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const deliveryFee = 2;
  const subtotal = getTotalCartAmount();
  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT: Delivery Information */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Delivery Information</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-slate-300 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-slate-300 px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email address"
              className="col-span-2 border border-slate-300 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Street"
              className="col-span-2 border border-slate-300 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="border border-slate-300 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-slate-300 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Zip code"
              className="border border-slate-300 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Country"
              className="border border-slate-300 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="col-span-2 border border-slate-300 px-4 py-2 rounded"
            />
          </form>
        </div>

        {/* RIGHT: Cart Totals */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Cart Totals</h2>
          <div className="flex justify-between border-b border-slate-300 py-2">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between border-b border-slate-300 py-2">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <div className="flex justify-between font-semibold text-lg py-2">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <button className="mt-6 bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition-all duration-300">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
