
export default function RecipeCard({meal}){
     const { idMeal, strMeal, strMealThumb }=meal
    return(
        <>
                <li>
                    <h3>{strMeal}</h3>
                    <img src={strMealThumb} alt={strMeal} />
                    <p>ID: {idMeal}</p>
            
                </li>
          </> 
    );
}

