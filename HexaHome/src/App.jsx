import React, { useState } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanal'; 
import PropertyList from './components/PropertyList';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    search: '',
    propertyType: ["Apartment", "Individual Floor", "Independent House", "Independent Villa", "1Rk/Studio House", "Plot/Land"],
    budgetRange: [0, 1000],
    areaRange: [0, 10000], // Changed to areaRange for consistency
    postedBy: ["owner", "dealer", "builder"], // Changed 'Builder' to 'builder' for consistency
    propertyFacing: ["north", "south", "east", "west", "northEast", "northWest", "southEast", "southWest"], // Changed to lowercase for consistency
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <Header filters={filters} onFilterChange={handleFilterChange} />
      <div className="container">
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        <PropertyList filters={filters} />
      </div>
    </div>
  );
}

export default App;
