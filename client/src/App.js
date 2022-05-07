import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { CheckoutPage } from "./Components/Checkout/CheckoutPage";
import { Merge } from "./Components/homepage/mergecomponet";
import { ProductDeails } from "./Components/ProductDetails/ProductDeails";
import { ProductsPage } from "./Components/ProductsPage/ProductsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Merge/>}/>
        <Route path="/details/:id" element={<ProductDeails />} />
        <Route path="/products/:type" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
