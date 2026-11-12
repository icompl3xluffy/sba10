import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/favoritesContext";
import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <p>
        No favorites yet. <Link to="/">Browse recipes</Link> and add some!
      </p>
    );
  }

  return (
    <div>
      <h1>My Favorites</h1>
      <div className="grid">
        {favorites.map((m) => (
          <RecipeCard
            key={m.idMeal}
            idMeal={m.idMeal}
            strMeal={m.strMeal}
            strMealThumb={m.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}