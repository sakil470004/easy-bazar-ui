import { useEffect, useState } from "react";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import NewProductCard from "../Home/NewProductCard";


function NewProductPage() {
  const [products, setProducts] = useState([]);
  const {isEmpty}=useFunction()
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setProducts(data);
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="m-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        New Product
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <NewProductCard product={product} key={product._id} />
        ))}
      </div>
    
    </div>
  );
}

export default NewProductPage;
