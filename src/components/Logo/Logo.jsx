import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import "./logo.css";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/"); 
  };
  return (
    <a href="/" className="logo" onClick={handleClick}>
      <img src={logo} alt="Company Logo" className="logo-image" />
    </a>
  );
};

export default Logo;
