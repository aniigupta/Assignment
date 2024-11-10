import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../assets/MealDetailsPage.css';

const fetchMealDetails = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
};

const MealDetailsPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const getMealDetails = async () => {
      const result = await fetchMealDetails(id);
      setMeal(result);
    };
    if (id) getMealDetails();
  }, [id]);

  if (!meal) return <div>Loading...</div>;

  return (
    <div className="meal-details-page">
      <div className="meal-details-container">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="meal-image"
        />
        <h2 className="meal-title">{meal.strMeal}</h2>
        <h3 className="ingredients-title">Ingredients:</h3>
        <ul className="ingredients-list">
          {Array.from({ length: 20 }, (_, index) => {
            const ingredient = meal[`strIngredient${index + 1}`];
            if (ingredient) {
              return <li key={index} className="ingredient-item">{ingredient}</li>;
            }
            return null;
          })}
        </ul>
        <h3 className="instructions-title">Instructions:</h3>
        <p className="instructions-text">{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetailsPage;
