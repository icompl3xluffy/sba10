
export default function Recipe({ meal=[] }) {
  return (
    <div>
      <ul>
        {meal.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
}