import React from "react";
import logo from "../../Assets/Logo.png"; // ייבוא ישיר של התמונה
import "./logo.css";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Company Logo" className="logo-image" />
    </a>
  );
};

export default Logo;
