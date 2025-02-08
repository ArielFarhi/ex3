import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import CarList from "../CarsList/CarsList";
import CarsData from "../../data/carsData"; 
import Footer from "../Footer/Footer";
import { useAppContext } from "../AppContext"; 
import "./homePage.css";

function HomePage() {
  const { searchQuery, setSearchQuery, filters, setFilters } = useAppContext();
  const handleTypeChange = (selectedTypes) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      types: selectedTypes,
    }));
  };
  const handleCapacityChange = (selectedCapacities) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      capacities: selectedCapacities,
    }));
  };
  const handlePriceChange = (maxPrice) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice,
    }));
  };
  return (
    <div className="app-container">
      <Header onSearch={setSearchQuery} />
      <div className="content-container">
        <Navbar
          carsData={CarsData}
          onTypeChange={handleTypeChange}
          onCapacityChange={handleCapacityChange}
          onPriceChange={handlePriceChange}
        />
        <CarList searchQuery={searchQuery} filters={filters} />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
