
export default function RecipeCard(props){
    const{ id, name,  description, instruction}=props;
    // May add instruction and steps: They should be able to click the card to get to the instruction and recipie page

    return(
        <div>
            <h2>{name}</h2>
            <img src={tumbnail}/>
            <div>
                
            <p>description</p>
            </div>
            {/* button to get to ingredients and recipie page */}
            <button></button>

        </div>
    )
}