import { useEffect, useState } from "react";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import OnlyForYouCard from "../Home/OnlyForYouCard";


function OnlyForYouPage() {
  const [products, setProducts] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="m-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Only For You
      </h2>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <OnlyForYouCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default OnlyForYouPage;
