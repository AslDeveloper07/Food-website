import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cart/>} />
        <Route path="/" element={<PlaceOrder/>}/>

      </Routes>
    </>
  );
};

export default App;
