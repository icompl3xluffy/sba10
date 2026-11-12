import { FavoritesContext } from "./favoritesContext";
import useLocalStorage from "../hooks/useLocalStorage";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  function addFavorite(recipe) {
    
      setFavorites([...favorites, recipe])
  }

  function removeFavorite(id) {
   favorites.filter((recipe) => recipe.idMeal !== id)

  }

  function isFavorite(id) {
    favorites.some=== recipe.id
    return recipe
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}