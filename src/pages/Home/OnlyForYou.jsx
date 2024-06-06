import { useEffect, useState } from "react";
import OnlyForYouCard from "./OnlyForYouCard";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";

function OnlyForYou() {
  const [products, setProducts] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
          // as all category don't have product so give better experience for user
          const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
          };
  
          // Set shuffled rows
          setProducts(shuffleArray(data)?.slice(0, 12));
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Only For You
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <OnlyForYouCard product={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-end">
        <Link to={'/only-for-you'} className="btn font-bold btn-warning btn-outline btn-sm mt-4">
          View More {">>"}
        </Link>
      </div>
    </div>
  );
}

export default OnlyForYou;
