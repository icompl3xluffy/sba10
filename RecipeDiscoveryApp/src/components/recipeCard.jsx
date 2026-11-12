
import { Link } from "react-router-dom";

export default function RecipeCard({ idMeal, strMeal, strMealThumb }) {
  return (
    <div className="card">
      <Link to={`/recipe/${idMeal}`}>
        <h2>{strMeal}</h2>
        <img src={strMealThumb} alt={strMeal} />
      </Link>
    </div>
  );
}

