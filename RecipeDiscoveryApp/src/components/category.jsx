import { Link } from "react-router-dom";

export default function BrowseCategory(props) {
 const{ idCategory,  strCategory, strCategoryThumb, strCategoryDescription}=props


    return(
        <div className="card">
            <Link to={`/category/${strCategory}`}>
                <h2>{strCategory}</h2>
                <img src={strCategoryThumb} alt={strCategory}/>
                <p>{strCategoryDescription}</p>
            </Link>
        </div>
    );
}