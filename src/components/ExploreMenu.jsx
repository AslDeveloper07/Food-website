import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
import { div } from 'framer-motion/client'

const ExploreMenu = () => {
  return (
    <div>
      <h1 className='text-center text-3xl'>Explore Menu</h1>
      <p className='text-center texgra'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ipsam vero, tempora voluptas ea in.
        <div className='flex justify-between text-center'>
          {
            menu_list.map((items, inx)=>{
              return(
                <div key={inx} >
                  <img className='mt-10' src={items.menu_image} alt={items.menu_name} />
                  <p className='mt-2 text-gray-500'>{items.menu_name}</p>
                </div>
              )
            })
          }
        </div>
      </p>
    </div>
  )
}

export default ExploreMenu