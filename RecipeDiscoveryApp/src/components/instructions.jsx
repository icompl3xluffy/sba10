import BrowseCategory from "./category";


export default RecipeContainer(){
    
    return(
        <div>
            <ul>
                <RecipeCard id={idCategory} category={strCategory} descrioption={strCategoryDescription} thumbnail={strCategoryThumb}/>
            </ul>

        //  <button Onclick>View</button>
        </div>   
    );
}
