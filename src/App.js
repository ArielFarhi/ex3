import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CarDetails from "./components/CarDetails/CarDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cars/:carId" element={<CarDetails />} />
    </Routes>
  );
}

export default App;
