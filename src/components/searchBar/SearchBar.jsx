import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css'; 

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search by car name"
      />
      <SearchIcon className="search-icon" />
    </div>
  );
}

export default SearchBar;
