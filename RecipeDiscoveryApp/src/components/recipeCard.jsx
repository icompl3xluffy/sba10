

export default function RecipeCard(props){
    const{ idMeal, strMeal, strCategory, strMealThumb}=props;
    // May add instruction and steps: They should be able to click the card to get to the instruction and recipie page

    return(
        <div className="card">
            
            <h2>{strMeal}</h2>
            <img src={strMealThumb}/>
            {/* button to get to ingredients and recipie page  */}
            {/* <button></button> */}

        </div>
    );
}