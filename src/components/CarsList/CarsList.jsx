import React from "react";
import { useAppContext } from "../AppContext"; 
import Card from "../Card/Card";
import carsData from "../../data/carsData";
import "./carsList.css";

function CarsList({ searchQuery, filters }) {
  const { favorites, showFavorites } = useAppContext();
  function searchCars(cars, query) {
    if (!query) return cars;
    return cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  function filterCars(cars, filters) {
    return cars.filter((car) => {
      const matchType = filters.types.includes(car.type);
      const matchCapacity = filters.capacities.includes(car.capacity);
      const matchPrice = filters.maxPrice ? car.pricePerDay <= filters.maxPrice : true;
      return matchType && matchCapacity && matchPrice;
    });
  }
  if (showFavorites) {
    return (
      <main>
        <div className="catalogue-header">
          <h1 className="catalogue-title">Favorite Cars</h1>
          <span className="catalogue-count">{favorites.length} Cars</span>
        </div>
        <div className="cards-container">
          {carsData
            .filter((car) => favorites.includes(car.id))
            .map((car) => (
              <Card key={car.id} car={car} />
            ))}
        </div>
      </main>
    );
  }
  const searchedCars = searchCars(carsData, searchQuery);
  const finalCars = searchQuery ? searchedCars : filterCars(searchedCars, filters);
  return (
    <main>
      <div className="catalogue-header">
        <h1 className="catalogue-title">Cars Catalogue</h1>
        <span className="catalogue-count">{finalCars.length} Cars</span>
      </div>
      <div className="cards-container">
        {finalCars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </main>
  );
}

export default CarsList;
