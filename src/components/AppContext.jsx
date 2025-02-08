import React, { createContext, useState, useContext } from "react";
import carsData from "../data/carsData"; 

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const allTypes = [...new Set(carsData.map(car => car.type))];
  const allCapacities = [...new Set(carsData.map(car => car.capacity))];
  const maxPrice = Math.max(...carsData.map(car => car.pricePerDay));
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    types: allTypes, 
    capacities: allCapacities, 
    maxPrice: maxPrice,
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const toggleFavorite = (carId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(carId)
        ? prevFavorites.filter((id) => id !== carId)
        : [...prevFavorites, carId]
    );
  };

  return (
    <AppContext.Provider
      value={{ favorites, toggleFavorite, searchQuery, setSearchQuery, filters, setFilters, showFavorites, setShowFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
