
import useFetch from "../hooks/useFetch";
import BrowseCategory from "../components/category";


export default function HomePage() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Recipe Categories</h1>
      <div className="grid">
        {data.categories.map((c) => (
          <BrowseCategory
            key={c.idCategory}
            strCategory={c.strCategory}
            strCategoryThumb={c.strCategoryThumb}

            strCategoryDescription={c.strCategoryDescription}
          />
        ))}
      </div>
    </div>
  );
}