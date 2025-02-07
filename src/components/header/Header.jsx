import React from "react";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Logo from "../Logo/Logo";
import "./header.css";

function Header({ onSearch }) {
  const { showFavorites, setShowFavorites } = useAppContext();
  const location = useLocation();
  const isCarDetailsPage = location.pathname.startsWith("/cars/");

  const handleFavoriteClick = () => {
    if (!isCarDetailsPage) {
      setShowFavorites(!showFavorites);
    }
  };

  return (
    <header>
      <div className="logo-container">
        <Logo />
      </div>
      <SearchBar onSearch={onSearch} />
      <IconButton
        onClick={handleFavoriteClick}
        className={showFavorites ? "favorite-header liked" : "favorite-header unliked"}
      >
        <FavoriteIcon />
      </IconButton>
    </header>
  );
}

export default Header;
