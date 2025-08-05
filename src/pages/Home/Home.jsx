import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import FoodDisplay from "../../components/FoodDisplay"

const Home = () => {
  const [category, setCategory]=useState("All")
  return (
    <div className="container">
      <Navbar/>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay/>
    </div>
  )
}

export default Home