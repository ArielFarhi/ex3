import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CarDetails from "./components/CarDetails/CarDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/cars/:carId"
        element={
          <Layout>
            <CarDetails />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
