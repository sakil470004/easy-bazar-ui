import { useEffect, useState } from "react";

import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import AllProductCard from "./AllProductCard";
import toast from "react-hot-toast";

function AllProduct() {
  const [products, setProducts] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setProducts(data);
      });
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(products.filter((product) => product._id !== id));
        toast.success("Product deleted successfully");
      });
  };
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
          <AllProductCard
            product={product}
            key={product._id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
