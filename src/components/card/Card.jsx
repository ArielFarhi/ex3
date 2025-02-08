import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AdjustIcon from "@mui/icons-material/Adjust";
import PeopleIcon from "@mui/icons-material/People";
import "./card.css";

function Card({ car }) {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useAppContext();
  const isLiked = favorites.includes(car.id);
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    toggleFavorite(car.id);
  };
  const handleImageClick = () => {
    navigate(`/cars/${car.id}`);
  };
  return (
    <div className="car-card">
      <IconButton onClick={handleFavoriteClick} className={`favorite-car ${isLiked ? "liked" : "unliked"}`}>
        {isLiked ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
      </IconButton>
      <h2 className="car-name">{car.name}</h2>
      <p className="car-type">{car.type}</p>
      <img 
        src={require(`../../Assets/${car.image}`)} 
        alt={car.name} 
        className="car-image" 
        onClick={handleImageClick} 
        style={{ cursor: "pointer" }} 
      />
      <div className="car-details">
        <div className="car-detail-item">
          <LocalGasStationIcon className="car-icon" />
          <span>{car.fuel}</span>
        </div>
        <div className="car-detail-item">
          <AdjustIcon className="car-icon" />
          <span>{car.transmission}</span>
        </div>
        <div className="car-detail-item">
          <PeopleIcon className="car-icon" />
          <span>{car.capacity}</span>
        </div>
      </div>
      <div className="car-price-container">
        <div className="car-price">
          <span className="car-price-value">
            ${car.pricePerDay.toFixed(2)}/
          </span>
          <span className="car-price-unit">day</span>
        </div>
        <button className="rent-button" onClick={(e) => e.stopPropagation()}>
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default Card;
