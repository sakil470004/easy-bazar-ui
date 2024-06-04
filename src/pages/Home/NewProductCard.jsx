function NewProductCard({ product }) {
  const rating = Math.round(product?.ratings);
  
  return (
    <div className="group card max-h-72 card-compact  bg-base-100 shadow-xl rounded-lg ">
      <div className=" w-full  justify-center items-center  transition-all duration-700 overflow-hidden">
        <img
          className="object-cover  max-h-full m-auto rounded-lg group-hover:scale-105 group-hover:transform group-hover:duration-700"
          src={product?.mainImage?.url}
          alt="Shoes"
        />
      </div>
      <div className="card-body ">
        <h2 className="text-xl ">{product?.name}</h2>
        <p className="text-lg text-orange-400 font-bold">${product?.price}</p>
        {/* rating component */}
        <div className="rating rating-xs flex items-center">
          {Array.from({ length: 5 }, (_, i) => (
            <input
              key={i}
              type="radio"
              name={`rating-${i}-${product?._id}`}
              className="mask mask-star-2 bg-orange-400"
              checked={rating === i + 1}
            />
          ))} <span className="text-md text-gray-500 mx-1">{product?.ratings}</span> <span className="text-md  text-gray-500 ">{`(${product?.reviews_count || 0})`}</span>
        </div>
      </div>
    </div>
  );
}

export default NewProductCard;
