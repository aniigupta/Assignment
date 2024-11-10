import { useState, useEffect } from "react";
import MealCard from "./MealCard";
import '../assets/FavoritesPage.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <h2 className="text-2xl">Your Favorite Meals</h2>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p>No favorite meals found</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
