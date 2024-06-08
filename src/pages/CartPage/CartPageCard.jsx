import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function CartPageCard({ product, updateProducts }) {
  const { removeFromDb, changeDesiredQuantity, 
    setBuyItems } = useAuth();
    const navigate = useNavigate();
  const priceAfterDiscount = (
    product?.price -
    (product?.price * product?.discount) / 100
  ).toFixed(2);

  const handlePlus = () => {
    changeDesiredQuantity(product._id, product.quantity + 1);
    const newProduct = { ...product, quantity: product.quantity + 1 };
    updateProducts(newProduct);
  };
  const handleMinus = () => {
    if (product.quantity > 1) {
      changeDesiredQuantity(product._id, product.quantity - 1);
      const newProduct = { ...product, quantity: product.quantity - 1 };
      updateProducts(newProduct);
    }
  };
  const handleBuyNow = () => {
    const newArray=[product];
   setBuyItems(newArray);
   navigate("/dashboard/addorders");
  }
  return (
    <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg grid  md:grid-cols-4 gap-5 items-center justify-center">
      <img src={product?.mainImage?.url} alt={product?.name} className="w-40" />
      <div>
        <h2 className="text-xl">{product?.name}</h2>
        <p className="text-lg text-orange-400 font-bold">
          ${priceAfterDiscount}
        </p>
        <p className="text-md flex items-center gap-2">
          <span className=" text-gray-500  line-through">
            ${product?.price}
          </span>
          <span className=" text-black  mx-1">- {product?.discount}%</span>
        </p>
        <p className="text-lg">
          Total: ${(priceAfterDiscount * product?.quantity).toFixed(2)}
        </p>
      </div>
      <div>
        <button
          onClick={handlePlus}
          className="bg-yellow-400 px-3 py-1 rounded-lg"
        >
          +
        </button>
        <span className="mx-2">{product?.quantity}</span>
        <button
          onClick={handleMinus}
          className="bg-yellow-400 px-3 py-1 rounded-lg"
        >
          -
        </button>
      </div>
      <div className="flex flex-col">
        <button onClick={handleBuyNow} className="btn btn-outline btn-sm btn-warning mb-4  px-3 py-1 rounded-lg">
          Buy Now
        </button>
        <button
          onClick={() => {
            removeFromDb(product?._id);
            console.log(product._id);
            updateProducts({ ...product, quantity: 0 });
          }}
          className="bg-red-400 text-white px-3 py-1 rounded-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartPageCard;
