import { useEffect, useState } from "react";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import CategorySearchCard from "./CategorySearchCard";
import { useParams } from "react-router-dom";
import OnlyForYou from "../Home/OnlyForYou";

function CategorySearch() {
  const { nameId } = useParams();

  const [products, setProducts] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        // building new Data custom for search
        let newData = [];
        const pdLan = data?.length;
        for (let i = 0; i < pdLan; i++) {
          const ctArray = data[i]?.categories;
          const ctLan = ctArray?.length;
          for (let j = 0; j < ctLan; j++) {
            console.log(ctArray[j], nameId);
            if (nameId?.toLowerCase()?.includes(ctArray[j]?.toLowerCase())) {
              newData.push(data[i]);
              break;
            }
          }
        }
        setProducts(newData);
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="m-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        {nameId} Products
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <CategorySearchCard product={product} key={product._id} />
        ))}
      </div>
    <div className="my-5">
    <OnlyForYou/>
    </div>
    </div>
  );
}

export default CategorySearch;
