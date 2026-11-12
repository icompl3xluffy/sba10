import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";

import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (!query) return <p>Type something in the search box.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.meals) return <p>No results for "{query}".</p>;

  return (
    <div>
      <h1>Results for "{query}"</h1>
      <div className="grid">
        {data.meals.map((m) => (
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