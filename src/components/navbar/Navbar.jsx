import React from "react";
import Checkbox from '@mui/material/Checkbox';
import "./navbar.css";

function Navbar() {
  return (
    <nav>
        <h6>TYPE</h6>
        <Checkbox />
        <h6>CAPACITY</h6>
        <Checkbox />
        <h6>PRICE (PER DAY)</h6>
        <Checkbox />
    </nav>
  );
}

export default Navbar;
