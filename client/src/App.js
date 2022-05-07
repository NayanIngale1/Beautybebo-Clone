<<<<<<< HEAD
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CheckoutPage } from './Components/Checkout/CheckoutPage';
import { Merge } from './Components/homepage/mergecomponet';
import { Login } from './Components/Navigation/Login';
import { Register } from './Components/Navigation/Register';
import { ProductDeails } from './Components/ProductDetails/ProductDeails';
import { ProductsPage } from './Components/ProductsPage/ProductsPage';
import { Navbars } from './Components/Navigation/Navbar';
import { Header } from './Components/Navigation/Header';
=======
import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { CheckoutPage } from "./Components/Checkout/CheckoutPage";
// import { Footer } from "./Components/Footer/footer";
import { Merge } from "./Components/homepage/mergecomponet";
import { Header } from "./Components/Navbar/Header";
import { Login } from "./Components/Navbar/Login";
import { Navbars } from "./Components/Navbar/Navbar";
import { Register } from "./Components/Navbar/Register";
import { ProductDeails } from "./Components/ProductDetails/ProductDeails";
import { ProductsPage } from "./Components/ProductsPage/ProductsPage";

>>>>>>> 8a05965f4309fbbfc995107551d9509b39114d29
function App() {
  return (
    <div className="App">
      <header>
        <div></div>
        <Header />
      </header>
      <Navbars></Navbars>
      <div className="onlyrouterspart">
      <Routes>
        <Route path="/" element={<Merge />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<ProductDeails />} />
        <Route path="/products/:type" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
