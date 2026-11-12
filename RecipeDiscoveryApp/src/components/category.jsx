// browse by category

export default function BrowseCategory(props) {
 const{ idCategory,  strCategory, strCategoryThumb, strCategoryDescription}=props

    // May add instruction and steps: They should be able to click the card to get to the instruction and recipie page

    return(
        <div className="card">
            
            <h2>{strCategory}</h2>
            <img src={strCategoryThumb}/>
            <p>{strCategoryDescription}</p>

        </div>
    );
}