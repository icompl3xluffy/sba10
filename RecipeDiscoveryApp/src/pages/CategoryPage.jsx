
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/recipeCard";

export default function CategoryPage() {
  const { name } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.meals) return <p>No recipes found for {name}.</p>;

  return (
    <div>
      <h1>{name}</h1>
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