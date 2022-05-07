import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { CheckoutPage } from "./Components/Checkout/CheckoutPage";
import { Merge } from "./Components/homepage/mergecomponet";
import { Login } from "./Components/Navbar/Login";
import { Register } from "./Components/Navbar/Register";
import { ProductDeails } from "./Components/ProductDetails/ProductDeails";
import { ProductsPage } from "./Components/ProductsPage/ProductsPage";

function App() {
  return (
    <div className="App">
      <header>
        <div></div>
        <Header />
      </header>
      <Navbars></Navbars>
      <Routes>
        <Route path="/" element={<Merge />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/details/:id" element={<ProductDeails />} />
        <Route path="/products/:type" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
