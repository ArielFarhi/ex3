import React, { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import carsData from "../../data/carsData"; 
import "./homePage.css";

function HomePage() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: Math.max(...carsData.map((car) => car.pricePerDay)),
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
          carsData={carsData}
          onTypeChange={handleTypeChange}
          onCapacityChange={handleCapacityChange}
          onPriceChange={handlePriceChange}
        />
        <Main
          showFavorites={showFavorites}
          searchQuery={searchQuery}
          filters={filters}
        />
      </div>
    </div>
  );
}

export default HomePage;
