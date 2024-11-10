import { useState } from "react";
import '../assets/SearchBar.css';
const SearchBar = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");

  const handleSearch = () => {
    if (ingredient.trim()) {
      onSearch(ingredient);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Enter ingredient"
        className="search-input"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="search-button"
      >
        Search Recipes
      </button>
    </div>
  );
};

export default SearchBar;
