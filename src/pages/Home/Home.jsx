import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu"
import Header from "../../components/Header"
// import Navbar from "../../components/Navbar"
import FoodDisplay from "../../components/FoodDisplay"
import AppDownload from "../../components/AppDownload"
import LoginPopup from "../../components/LoginPopup"

const Home = () => {
  const [category, setCategory]=useState("All")
  return (
    <div className="container">
      <LoginPopup/>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home