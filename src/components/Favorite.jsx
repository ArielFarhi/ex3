import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

function Favorite({ className = "", onClick }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    if (onClick) onClick(!liked);
  };

  return (
    <IconButton
      onClick={handleClick}
      className={`${className} ${liked ? "liked" : "unliked"}`}
    >
      <FavoriteIcon />
    </IconButton>
  );
}

export default Favorite;
