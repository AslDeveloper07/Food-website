import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const {cartItem, food_list, removeFormCart}=useContext(StoreContext)
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
        
      </div>
    </div>
  )
}

export default Cart