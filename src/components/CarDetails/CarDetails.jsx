import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../AppContext";
import carsData from "../../data/carsData.json";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import "./carDetails.css";

function CarDetails() {
  const { carId } = useParams();
  const { favorites, toggleFavorite } = useAppContext();
  const car = carsData.find((car) => car.id === parseInt(carId));
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (car) {
      setIsFavorite(favorites.includes(car.id));
    }
  }, [favorites, car]);
  if (!car) {
    return <p>Car not found!</p>;
  }
  return (
    <div>
      <h1 className="car-details-title">Car Details</h1>
      <div className="car-details-container">
        <div className="car-details-left">
          <div className="car-highlight">
            <h2 className="car-title">{car.name}</h2>
            <p className="car-subtitle">{car.description}</p>
            <img
              className="car-main-image"
              src={require(`../../Assets/${car.image}`)}
              alt={car.name}
            />
          </div>
          <div className="car-gallery">
            {car.gallery.map((image, index) => (
              <div key={index} className="gallery-image-container">
                <img
                  className="gallery-image"
                  src={require(`../../Assets/${image}`)}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="car-details-right">
          <div className="car-header">
            <h1 className="car-name-details">{car.name}</h1>
            <IconButton
              onClick={() => {
                toggleFavorite(car.id);
                setIsFavorite(!isFavorite);
              }}
              className="favorite-icon"
            >
              {isFavorite ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </div>
          <div className="rating-section">
            <Rating
              name="read-only"
              value={car.rating}
              precision={0.5}
              readOnly
              sx={{ fontSize: "20px" }}
            />
            <span className="review-count">{car.reviewCount} Reviewers</span>
          </div>
          <p className="car-description">{car.description}</p>
          <ul className="car-details-list">
            <li>
              <span>Type Car</span>
              <strong>{car.type}</strong>
            </li>
            <li>
              <span>Capacity</span>
              <strong>{car.capacity}</strong>
            </li>
            <li>
              <span>Steering</span>
              <strong>{car.transmission}</strong>
            </li>
            <li>
              <span>Gasoline</span>
              <strong>{car.fuel}</strong>
            </li>
          </ul>
          <div className="rent-section">
            <div className="car-price">
              ${car.pricePerDay.toFixed(2)} <span>/ days</span>
            </div>
            <button className="rent-now-button">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
