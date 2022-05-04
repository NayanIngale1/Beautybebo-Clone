import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { ProductDeails } from "./Components/ProductDeails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductDeails />} />
      </Routes>

    </div>
  );
}

export default App;
