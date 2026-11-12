import './App.css'
import {BrowseCategory} from './components/category';
import Recipe from './components/recipeCard';


export default function App() {
 const [meals, setMeals] = useState([])

  return (
    <>
    <BrowseCategory />
    <RecipeCard />
    <Recipe meals={meals} />
    </>
  );
}


