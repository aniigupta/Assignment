import { Link } from "react-router-dom";
import '../assets/MealCard.css';
import '../assets/MealCard.css';

const MealCard = ({ meal }) => (
  <div className="meal-card">
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal}
      className="meal-card-img"
    />
    <h3 className="meal-card-title">{meal.strMeal}</h3>
    <Link
      to={`/meal/${meal.idMeal}`}
      className="view-details"
    >
      View Details
    </Link>
  </div>
);

export default MealCard;
