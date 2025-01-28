import React, { useState } from "react";
import Card from "../Card/Card";
import carsData from "../../data/carsData";
import "./main.css";

function Main({ showFavorites, searchQuery, filters }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (car) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === car.id)
        ? prevFavorites.filter((fav) => fav.id !== car.id)
        : [...prevFavorites, car]
    );
  };

  const filteredCars = carsData.filter((car) => {
    const matchSearch = car.name
      .toLowerCase()
      .startsWith(searchQuery.toLowerCase());
    const matchType =
      filters.types.length === 0 || filters.types.includes(car.type);
    const matchCapacity =
      filters.capacities.length === 0 ||
      filters.capacities.includes(car.capacity);
    const matchPrice = car.pricePerDay <= filters.maxPrice;

    return matchSearch && matchType && matchCapacity && matchPrice;
  });

  const carsToDisplay = showFavorites
    ? favorites.filter((car) => filteredCars.includes(car))
    : filteredCars;

  return (
    <main>
      <div className="catalogue-header">
        <h1 className="catalogue-title">Cars Catalogue</h1>
        <span className="catalogue-count">{carsToDisplay.length} Cars</span>
      </div>
      <div className="cards-container">
        {carsToDisplay.map((car) => (
          <Card
            key={car.id}
            car={car}
            toggleFavorite={() => toggleFavorite(car)}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
