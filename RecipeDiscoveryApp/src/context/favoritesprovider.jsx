import { FavoritesContext } from "./favoritesContext";
import useLocalStorage from "../hooks/useLocalStorage";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  function addFavorite(recipe) {
    setFavorites([...favorites, recipe]);
  }

  function removeFavorite(id) {
    setFavorites(favorites.filter((recipe) => recipe.idMeal !== id));
  }

  function isFavorite(id) {
    return favorites.some((recipe) => recipe.idMeal === id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}