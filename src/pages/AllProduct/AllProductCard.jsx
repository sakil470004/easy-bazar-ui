import { Link } from "react-router-dom";

function AllProductCard({ product }) {
  const rating = Math.round(product?.ratings);

  return (
    <div className="group card max-h-80 card-compact  bg-base-100 shadow-xl rounded-lg border border-white hover:border-gray-400 transition-all duration-300">
      <div className=" w-full  justify-center items-center  transition-all duration-700 overflow-hidden">
        <img
          className="object-cover  max-h-full m-auto rounded-lg group-hover:scale-105 group-hover:transform group-hover:duration-700"
          src={product?.mainImage?.url}
          alt="Shoes"
        />
      </div>
      <div className="card-body ">
        <Link to={`/product/${product?._id}`}>
          <h2 className="text-xl">{product?.name}</h2>
        </Link>
        <p className="text-lg text-orange-400 font-bold">${product?.price}</p>
        <div className="flex justify-between">
          <button className="btn font-bold btn-warning btn-outline btn-sm mt-4">
            Edit
          </button>
          <button className="btn font-bold btn-error btn-outline btn-sm mt-4">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllProductCard;
