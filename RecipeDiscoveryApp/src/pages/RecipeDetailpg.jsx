
import useFetch from "../hooks/useFetch";
import Instruction from "../components/instructions";
import { useParams } from "react-router-dom";



export default function RecipeDetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.meals) return <p>Recipe not found.</p>;

  return <Instruction recipe={data.meals[0]} />;
}