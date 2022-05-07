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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<ProductDeails />} />
        <Route path="/products/:type" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
