import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carsData from "../../data/carsData";
import "./carDetails.css";

function CarDetails() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const selectedCar = carsData.find((car) => car.id === parseInt(carId));
    setCar(selectedCar);
  }, [carId]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="car-details-container">
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
      <div className="car-details-card">
        <h1>{car.name}</h1>
        <img src={require(`../../Assets/${car.image}`)} alt={car.name} />
        <p>{car.description}</p>
        <div className="car-details-info">
          <span>Type: {car.type}</span>
          <span>Capacity: {car.capacity}</span>
          <span>Transmission: {car.transmission}</span>
          <span>Fuel: {car.fuel}</span>
        </div>
        <div className="car-price">
          <h2>${car.pricePerDay.toFixed(2)} / day</h2>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
