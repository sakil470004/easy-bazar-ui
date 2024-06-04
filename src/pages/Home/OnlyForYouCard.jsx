function OnlyForYouCard({ product }) {
  const rating = Math.round(product?.ratings);
  const priceAfterDiscount = (
    product?.price -
    (product?.price * product?.discount) / 100
  ).toFixed(2);
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
        <p className="text-lg text-orange-400 font-bold">
          ${priceAfterDiscount}
        </p>
        <div className="text-md flex items-center gap-2">
          <span className=" text-gray-500  line-through">
            ${product?.price}
          </span>
          <span className=" text-black  mx-1">
            - {product?.discount}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default OnlyForYouCard;
