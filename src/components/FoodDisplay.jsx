import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const FoodDisplay =  () => {
  const {food_list}=useContext(StoreContext)
  return (
    <div className='' id='food-display'>
<h2>
  
</h2>
    </div>
  )
}

export default FoodDisplay