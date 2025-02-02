import React, { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import CarsData from "../../data/carsData"; 
import Footer from "../Footer/Footer";
import "./homePage.css";

function HomePage() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: Math.max(...CarsData.map((car) => car.pricePerDay)),
  });

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
      <Header
        onSearch={setSearchQuery}
        onToggleFavorites={() => setShowFavorites(!showFavorites)}
      />
      <div className="content-container">
        <Navbar
          carsData={CarsData}
          onTypeChange={handleTypeChange}
          onCapacityChange={handleCapacityChange}
          onPriceChange={handlePriceChange}
        />
        <Main
          showFavorites={showFavorites}
          searchQuery={searchQuery}
          filters={filters}
        />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
