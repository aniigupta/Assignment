import { useState } from "react";
import SearchBar from "./SearchBar";
import MealResultsPage from "./MealResultsPage";
import '../assets/HomePage.css';

const HomePage = () => {
  const [ingredient, setIngredient] = useState("");
  const handleSearch = (ingredient) => {
    setIngredient(ingredient);
  };
  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      {ingredient && <MealResultsPage ingredient={ingredient} />}
    </div>
  );
};

export default HomePage;
