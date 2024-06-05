import { Link } from "react-router-dom";

function CartPageCard({ product }) {
  const priceAfterDiscount = (
    product?.price -
    (product?.price * product?.discount) / 100
  ).toFixed(2);
  return (
    <div className="flex justify-between items-center my-5" >
                <div className="flex gap-5">
                    <img
                    src={product?.mainImage?.url}
                    alt={product?.name}
                    className="w-20"
                    />
                    <div>
                    <h2 className="text-xl">{product?.name}</h2>
                    <p className="text-lg text-orange-400 font-bold">
                        ${product?.price}
                    </p>
                    <p className="text-md flex items-center gap-2">
                        <span className=" text-gray-500  line-through">
                        ${product?.price}
                        </span>
                        <span className=" text-black  mx-1">
                        - {product?.discount}%
                        </span>
                    </p>
                    </div>
                </div>
                <div>
                    <button className="bg-yellow-400 px-3 py-1 rounded-lg">+</button>
                    <span className="mx-2">{product?.quantity}</span>
                    <button className="bg-yellow-400 px-3 py-1 rounded-lg">-</button>
                </div>
                </div>
  );
}

export default CartPageCard;
