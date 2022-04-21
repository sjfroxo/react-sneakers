import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Cart from './components/Cart/Cart';
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import { PATH } from "./constants/values";


const App = () => {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path={PATH.DETAILS} element={<ProductDetails />} />
        {/*<Route path="invoices" element={<Invoices />} />*/}
      </Routes>
    </div>
  );
}

export default App;
