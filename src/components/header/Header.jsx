import React from "react";
import SearchBar from "../searchBar/SearchBar";
import "./header.css";
import Favorite from "../Favorite";

function Header() {
  return (
    <header>
      <a href="/HomePage">
        <div className="logo"></div>
      </a>
      <SearchBar />
      <Favorite className="favorite-header"/>
    </header>
  );
}

export default Header;
