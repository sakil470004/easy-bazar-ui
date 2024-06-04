import { useEffect, useState } from "react";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import CategoriesCard from "../Home/CategoriesCard";


function CategoryPage() {
  const [allCategories, setAllCategories] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);
  if (isEmpty(allCategories)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="m-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Categories
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        {allCategories.map((category) => (
          <CategoriesCard category={category} key={category._id} />
        ))}
      </div>
     
    </div>
  );
}

export default CategoryPage;
