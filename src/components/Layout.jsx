import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import CarsData from "../data/carsData";

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Navbar carsData={CarsData} />
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
