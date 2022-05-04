import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { ProductDeails } from "./Components/ProductDetails/ProductDeails";
import { ProductCard } from "./Components/ProductsPage/ProductCard";
import { ProductsPage } from "./Components/ProductsPage/ProductsPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/details:id" element={<ProductDeails />} />
        <Route
          path="/products"
          element={
           
                <ProductsPage />
       
          }
        />
      </Routes>
    </div>
  );
}

export default App;
