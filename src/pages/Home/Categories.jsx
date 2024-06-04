import{ useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";

function Categories() {
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data.slice(0, 12)));
  }, []);
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Categories
      </h2>
     <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-4">
     {allCategories.map((category) => (
        <CategoriesCard category={category} key={category._id} />
      ))}
     </div>
    </div>
  );
}

export default Categories;
