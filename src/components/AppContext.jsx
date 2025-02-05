import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: 100,
  });

  return (
    <AppContext.Provider value={{ favorites, setFavorites, filters, setFilters }}>
      {children}
    </AppContext.Provider>
  );
};
