import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { CartPage } from './Components/CartPage/CartPage';
import { CheckoutPage } from './Components/Checkout/CheckoutPage';
// import { Footer } from "./Components/Footer/footer";
import { Merge } from './Components/homepage/mergecomponet';
import { Face } from './Components/Navigation/DropDownItems';
import { Header } from './Components/Navigation/Header';
import { Login } from './Components/Navigation/Login';
import { Navbars } from './Components/Navigation/Navbar';
import { Register } from './Components/Navigation/Register';
import { ProductDeails } from './Components/ProductDetails/ProductDeails';
import { ProductsPage } from './Components/ProductsPage/ProductsPage';

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
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
