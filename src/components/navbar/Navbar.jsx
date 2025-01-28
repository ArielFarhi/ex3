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

  const [selectedTypes, setSelectedTypes] = useState(Object.keys(uniqueTypes)); // כל סוגי הרכבים מסומנים בהתחלה
  const [selectedCapacities, setSelectedCapacities] = useState(Object.keys(uniqueCapacities)); // כל הקיבולות מסומנות בהתחלה
  const [priceRange, setPriceRange] = useState(maxPrice); // מחיר מקסימלי כברירת מחדל

  const handleTypeChange = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type) // הסרה אם קיים
      : [...selectedTypes, type]; // הוספה אם לא קיים
    setSelectedTypes(updatedTypes);
    onTypeChange(updatedTypes); // העברת הנתונים למעלה
  };

  const handleCapacityChange = (capacity) => {
    const updatedCapacities = selectedCapacities.includes(capacity)
      ? selectedCapacities.filter((c) => c !== capacity) // הסרה אם קיים
      : [...selectedCapacities, capacity]; // הוספה אם לא קיים
    setSelectedCapacities(updatedCapacities);
    onCapacityChange(updatedCapacities); // העברת הנתונים למעלה
  };

  const handlePriceChange = (e, newValue) => {
    setPriceRange(newValue);
    onPriceChange(newValue); // העברת הנתונים למעלה
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
                checked={selectedTypes.includes(type)} // מסומן כברירת מחדל
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
            label={`${capacity} Person (${count})`} 
          />
        ))}
      </div>

      <div className="filter-section">
        <h6>PRICE (PER DAY)</h6>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          min={0}
          max={maxPrice}
          valueLabelDisplay="auto"
        />
        <span>Max: ${priceRange}</span>
      </div>
    </div>
  );
}

export default Navbar;
