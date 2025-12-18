import React from "react";
import Home from "./Page/Home.jsx";
import LeftSlideBar from "./Components/LeftSlideBar.jsx";
import { Routes, Route } from "react-router-dom";
import PreviousOrders from "./Page/PreviousOrders.jsx";
import FoodOrder from "./Page/FoodOrder.jsx";

const App = () => {
  return (
    <div
      className="w-screen min-h-screen flex md:flex-row flex-col p-2"
      style={{ backgroundColor: "var(--bgColor)" }}
    >
      <LeftSlideBar />

      <div className="w-full h-full md:w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Orders" element={<PreviousOrders />} />
          <Route path="/FoodOrder" element={<FoodOrder/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
