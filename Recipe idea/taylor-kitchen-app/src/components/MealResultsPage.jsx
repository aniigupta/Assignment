import { useState, useEffect } from "react";
import MealCard from "./MealCard";
import '../assets/MealResultsPage.css';

const fetchMeals = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

const MealResultsPage = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const result = await fetchMeals(ingredient);
      setMeals(result);
    };
    if (ingredient) getMeals();
  }, [ingredient]);

  return (
    <div className="meal-results-page">
      <div className="meal-results">
        {meals && meals.length > 0 ? (
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
};

export default MealResultsPage;
