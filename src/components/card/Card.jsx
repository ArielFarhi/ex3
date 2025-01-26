import React from "react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import Favorite from "../Favorite";
import "./card.css";

function Card({ car }) {
  return (
    <div className="car-card">
      <Favorite className="favorite-card"/>
      <h2 className="car-name">{car.name}</h2>
      <p className="car-type">{car.type}</p>
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <div className="car-detail-item">
          <LocalGasStationIcon className="car-icon" />
          <span>{car.fuel}</span>
        </div>
        <div className="car-detail-item">
          <SettingsIcon className="car-icon" />
          <span>{car.transmission}</span>
        </div>
        <div className="car-detail-item">
          <PeopleIcon className="car-icon" />
          <span>{car.capacity}</span>
        </div>
      </div>
      <div className="car-price-container">
        <div className="car-price">
          <span className="car-price-value">${car.pricePerDay.toFixed(2)}/</span>
          <span className="car-price-unit">day</span>
        </div>
        <button className="rent-button">Rent Now</button>
      </div>
    </div>
  );
}

export default Card;
