import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AdjustIcon from "@mui/icons-material/Adjust";
import PeopleIcon from "@mui/icons-material/People";
import "./card.css";

function Card({ car, toggleFavorite }) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    setIsLiked(!isLiked);
    toggleFavorite();
  };

  const handleCardClick = () => {
    navigate(`/cars/${car.id}`);
  };

  useEffect(() => {
    import(`../../Assets/${car.image}`)
      .then((image) => setImageSrc(image.default))
      .catch((err) => console.error(err));
  }, [car.image]);

  return (
    <div className="car-card" onClick={handleCardClick}>
      <IconButton
        onClick={handleFavoriteClick}
        className={`favorite-car ${isLiked ? "liked" : "unliked"}`}
      >
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      <h2 className="car-name">{car.name}</h2>
      <p className="car-type">{car.type}</p>
      <img src={imageSrc} alt={car.name} className="car-image" />
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
        <button
          className="rent-button"
          onClick={(e) => {
            e.stopPropagation(); 
          }}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default Card;
