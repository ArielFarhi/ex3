import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import "./header.css";

function Header({ onSearch, onToggleFavorites }) {
  const [showFavorites, setShowFavorites] = useState(false);

  const handleFavoriteClick = () => {
    const newState = !showFavorites;
    setShowFavorites(newState);
    onToggleFavorites(newState);
  };

  return (
    <header>
      <a href="/HomePage">
        <div className="logo"></div>
      </a>
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
