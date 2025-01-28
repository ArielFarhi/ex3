import React, { useState } from "react";
import { Checkbox, FormControlLabel, Slider } from "@mui/material";
import "./navbar.css";

function Navbar({ carsData, onTypeChange, onCapacityChange, onPriceChange }) {
  const uniqueTypes = carsData.reduce((acc, car) => {
    acc[car.type] = (acc[car.type] || 0) + 1;
    return acc;
  }, {});

  const uniqueCapacities = carsData.reduce((acc, car) => {
    acc[car.capacity] = (acc[car.capacity] || 0) + 1;
    return acc;
  }, {});

  const maxPrice = Math.max(...carsData.map((car) => car.pricePerDay));

  const [selectedTypes, setSelectedTypes] = useState(Object.keys(uniqueTypes)); 
  const [selectedCapacities, setSelectedCapacities] = useState(Object.keys(uniqueCapacities)); 
  const [priceRange, setPriceRange] = useState(maxPrice); 

  const handleTypeChange = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type) 
      : [...selectedTypes, type]; 
    setSelectedTypes(updatedTypes);
    onTypeChange(updatedTypes); 
  };

  const handleCapacityChange = (capacity) => {
    const updatedCapacities = selectedCapacities.includes(capacity)
      ? selectedCapacities.filter((c) => c !== capacity) 
      : [...selectedCapacities, capacity]; 
    setSelectedCapacities(updatedCapacities);
    onCapacityChange(updatedCapacities); 
  };

  const handlePriceChange = (e, newValue) => {
    setPriceRange(newValue);
    onPriceChange(newValue); 
  };

  return (
    <div className="navbar">
      <div className="filter-section">
        <h6>TYPE</h6>
        {Object.entries(uniqueTypes).map(([type, count]) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox 
                checked={selectedTypes.includes(type)} 
                onChange={() => handleTypeChange(type)}
              />
            }
            label={`${type} (${count})`} 
          />
        ))}
      </div>

      <div className="filter-section">
        <h6>CAPACITY</h6>
        {Object.entries(uniqueCapacities).map(([capacity, count]) => (
          <FormControlLabel
            key={capacity}
            control={
              <Checkbox 
                checked={selectedCapacities.includes(capacity)} 
                onChange={() => handleCapacityChange(capacity)}
              />
            }
            label={`${capacity} (${count})`} 
          />
        ))}
      </div>

      <div className="filter-section price-filter">
        <h6>PRICE (PER DAY)</h6>
        <Slider 
          value={priceRange}
          onChange={handlePriceChange}
          min={0}
          max={maxPrice}
          valueLabelDisplay="off"
          sx={{
            width: "88%",
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
        <span>Max: ${priceRange}</span>
      </div>
    </div>
  );
}

export default Navbar;
