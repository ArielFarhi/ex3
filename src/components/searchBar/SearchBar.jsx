import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css'; 

function SearchBar({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search by car name"
        onChange={handleInputChange} 
      />
      <SearchIcon className="search-icon" />
    </div>
  );
}

export default SearchBar;
