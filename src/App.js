import React, { useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import carsData from "./data/carsData"; // נתוני הרכבים
import "./app.css";

function App() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: Math.max(...carsData.map((car) => car.pricePerDay)),
  });

  // עדכון סוגי הרכבים שנבחרו
  const handleTypeChange = (selectedTypes) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      types: selectedTypes,
    }));
  };

  // עדכון קיבולת שנבחרה
  const handleCapacityChange = (selectedCapacities) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      capacities: selectedCapacities,
    }));
  };

  // עדכון מחיר מקסימלי
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

export default App;
