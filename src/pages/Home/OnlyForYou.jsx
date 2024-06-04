import { useEffect, useState } from "react";
import OnlyForYouCard from "./OnlyForYouCard";

function OnlyForYou() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 12));
      });
  }, []);
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Only For You
      </h2>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <OnlyForYouCard product={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-end">
        <button className="btn font-bold btn-warning btn-outline btn-sm mt-4">View More {">>"}</button>
      </div>
    </div>
  );
}

export default OnlyForYou;
