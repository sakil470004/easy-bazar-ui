import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFunction from "../../hooks/useFunction";
import { Link } from "react-router-dom";

function Categories() {
  const [allCategories, setAllCategories] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data.slice(0, 12)));
  }, []);
  if (isEmpty(allCategories)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6 mt-10">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Categories
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        {allCategories.map((category) => (
          <CategoriesCard category={category} key={category._id} />
        ))}
      </div>
      <div className="flex justify-end">
        <Link to={"/categories-all"} className="btn font-bold btn-warning btn-outline btn-sm  mt-4">
          View More {">>"}
        </Link>
      </div>
    </div>
  );
}

export default Categories;
