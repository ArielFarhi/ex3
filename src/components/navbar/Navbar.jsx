import React from "react";
import { Checkbox, FormControlLabel, Slider } from "@mui/material";
import { useAppContext } from "../AppContext";
import "./navbar.css";

function Navbar({ carsData }) {
  const { filters, setFilters } = useAppContext();

  const uniqueTypes = [...new Set(carsData.map(car => car.type))];
  const uniqueCapacities = [...new Set(carsData.map(car => car.capacity))];
  const maxPrice = Math.max(...carsData.map(car => car.pricePerDay));

  const handleTypeChange = (type) => {
    const updatedTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];

    setFilters((prevFilters) => ({ ...prevFilters, types: updatedTypes }));
  };

  const handleCapacityChange = (capacity) => {
    const updatedCapacities = filters.capacities.includes(capacity)
      ? filters.capacities.filter((c) => c !== capacity)
      : [...filters.capacities, capacity];

    setFilters((prevFilters) => ({ ...prevFilters, capacities: updatedCapacities }));
  };

  const handlePriceChange = (e, newValue) => {
    setFilters((prevFilters) => ({ ...prevFilters, maxPrice: newValue }));
  };

  return (
    <div className="navbar">
      <div className="filter-section">
        <h6>TYPE</h6>
        {uniqueTypes.map((type) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox
                checked={filters.types.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
            }
            label={type}
          />
        ))}
      </div>
      <div className="filter-section">
        <h6>CAPACITY</h6>
        {uniqueCapacities.map((capacity) => (
          <FormControlLabel
            key={capacity}
            control={
              <Checkbox
                checked={filters.capacities.includes(capacity)}
                onChange={() => handleCapacityChange(capacity)}
              />
            }
            label={capacity}
          />
        ))}
      </div>
      <div className="filter-section price-filter">
        <h6>PRICE (PER DAY)</h6>
        <Slider
          value={filters.maxPrice}
          onChange={handlePriceChange}
          min={0}
          max={maxPrice}
          valueLabelDisplay="off"
          sx={{
            width: "100%",
            "& .MuiSlider-thumb": {
              backgroundColor: "#3563e9",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#3563e9",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#d3d3d3",
            },
          }}
        />
        <span>Max: ${filters.maxPrice}</span>
      </div>
    </div>
  );
}

export default Navbar;
