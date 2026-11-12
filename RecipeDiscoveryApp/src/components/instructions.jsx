
 import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";


export default function Instruction({ recipe }) {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);


  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const item = recipe[`strIngredient${i}`];
    const amount = recipe[`strMeasure${i}`];
    if (item && item.trim()) {
      ingredients.push(`${amount} ${item}`);
    }
  }

  const saved = isFavorite(recipe.idMeal);

  function handleClick() {
    if (saved) {
      removeFavorite(recipe.idMeal);
    } else {
      addFavorite({
        idMeal: recipe.idMeal,
        strMeal: recipe.strMeal,
        strMealThumb: recipe.strMealThumb,
      });
    }
  }

  return (
    <div className="detail">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <button
     className={saved ? "fav-btn remove" : "fav-btn add"}
      onClick={handleClick}
      >
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