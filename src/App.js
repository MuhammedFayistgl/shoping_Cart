import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Heder from "../src/components/Heder/Heder.jsx";
import ProdutDeteals from './components/ProductDetals/ProductDeteals'
import { Context } from "./Context/Context.jsx";
import './App.scss'
import NotFont404 from "./components/Not Font Page/NotFont404";
import Counter from "./components/DemmyConter/Counter";
import Slider from "./components/DemmyConter/slider/slider";
function App() {
  return (
    <>
       <Context>
      <Heder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="ProductDetels/:id" element={<ProdutDeteals/>}/>
        <Route path="*" element={<NotFont404/>}/>
        <Route path="counter" element={<Counter/>} />
        <Route path="slider" element={<Slider/>} />
      </Routes>
      </Context>
    </>
  );
}

export default App;
