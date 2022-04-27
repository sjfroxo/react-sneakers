import React, {useState} from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ProductsList from "./components/Products/ProductsList";
import ProductDetails from "./components/Products/ProductDetails";
import Favorite from "./store/Favorite/Favorite";
import { PATH } from "./constants/values";
import './index.scss';


const App = () => {
    const [isCartOpen, setCartOpen] = useState(false);

    const handleToggleCart = () => {
        setCartOpen(!isCartOpen)
    }

  return (
    <div className="wrapper clear">
        <Header openCart={handleToggleCart}/>
        {isCartOpen && <Cart openCart={handleToggleCart}/>}
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path={PATH.DETAILS} element={<ProductDetails />} />
        <Route path={PATH.FAVORITE} element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
