import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

const Home = () => {
  const [category, setCategory]=useState("All")
  return (
    <div className="container">
      <Navbar/>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home