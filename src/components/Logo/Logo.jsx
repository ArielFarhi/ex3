import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext"; // שימוש בקונטקסט
import logo from "../../Assets/Logo.png";
import "./logo.css";

const Logo = () => {
  const navigate = useNavigate();
  const { setFilters } = useAppContext();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/"); // חזרה לעמוד הבית מבלי לאפס סטייטים
  };

  return (
    <a href="/" className="logo" onClick={handleClick}>
      <img src={logo} alt="Company Logo" className="logo-image" />
    </a>
  );
};

export default Logo;
