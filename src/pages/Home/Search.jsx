import { useEffect, useState } from "react";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import SearchCard from "./SearchCard";
function Search({ searchText }) {
  const [products, setProducts] = useState([]);
  const { isEmpty } = useFunction();
 
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        const filteredData = data.filter((product) =>
          product?.name?.toLowerCase().includes(searchText?.toLowerCase())
        );

        setProducts(filteredData);
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6 px-6">
      <h2 className="text-2xl mb-10 font-bold text-green-400 uppercase">
        Search Results {">>"} {searchText} {">>"} {products?.length}
      </h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <SearchCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default Search;
