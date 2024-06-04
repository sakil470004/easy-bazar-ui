import { useEffect, useState } from "react";

import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import AllProductCard from "./AllProductCard";


function AllProduct() {
  const [products, setProducts] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6 ">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        All Product
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <AllProductCard product={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-end">
        <button className="btn font-bold btn-warning btn-outline btn-sm mt-4">
          View More {">>"}
        </button>
      </div>
    </div>
  );
}

export default AllProduct;
