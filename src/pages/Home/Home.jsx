import ExploreMenu from "../../components/ExploreMenu"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

const Home = () => {
  return (
    <div className="container">
      <Navbar/>
      <Header/>
      <ExploreMenu/>
    </div>
  )
}

export default Home