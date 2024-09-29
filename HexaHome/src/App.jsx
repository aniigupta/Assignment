import React, { useState } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanal'; 
import PropertyList from './components/PropertyList';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    search: '',
    propertyType: ["Apartment", "Individual Floor", "Independent House", "Independent Villa", "1Rk/Studio House", "Plot/Land"],
    budgetRange: [0, 10000],
    areaRange: [0, 10000],
    postedBy: ["owner", "dealer", "builder"], 
    propertyFacing: ["north", "south", "east", "west", "northEast", "northWest", "southEast", "southWest"], 
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
