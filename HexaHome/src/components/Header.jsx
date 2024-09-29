import React, { useState } from 'react';

const Header = ({ filters, onFilterChange }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      <div className="logo">HexaHome</div>
      <input
        type="text"
        value={filters.search}
        onChange={handleSearchChange}
        placeholder="Search for 'Locality or Landmark'"
      />
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Menu
        </button>
        {dropdownVisible && (
          <div className="dropdown-content">
            <button className="login-btn">Login</button>
            <button className="post-btn">Post Property</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
