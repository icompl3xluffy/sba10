import RecipeCard from "./recipeCard";

export default function Recipe({ meals }) {
  return (
    <div>
      <ul>
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
}