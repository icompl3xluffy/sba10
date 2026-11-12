
 import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";

export default function Instruction({ recipe }) {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  return (
    <div className="detail">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <button onClick={handleClick}>
        {saved ? "Remove from Favorites" : "Add to Favorites"}
      </button>

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
   </div>
  );
}
            </Link>
        </div> 
