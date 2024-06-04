import { useEffect, useState } from "react";
import NewProductCard from "./NewProductCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFunction from "../../hooks/useFunction";

function NewProduct() {
  const [products, setProducts] = useState([]);
  const {isEmpty}=useFunction()
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setProducts(data.slice(0, 12));
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        New Product
      </h2>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <NewProductCard product={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-end">
        <button className="btn font-bold btn-warning btn-outline btn-sm mt-4">View More {">>"}</button>
      </div>
    </div>
  );
}

export default NewProduct;
