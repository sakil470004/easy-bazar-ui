import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function AddOrderCard({ product }) {
  const { removeFromDb, changeDesiredQuantity, 
    setBuyItems } = useAuth();
    const navigate = useNavigate();
  const priceAfterDiscount = (
    product?.price -
    (product?.price * product?.discount) / 100
  ).toFixed(2);


  return (
    <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg grid  md:grid-cols-2 gap-5 items-center justify-center max-w-sm ">
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
        
        <p >Quantity : {product.quantity}</p>
        <p className="text-lg font-semibold">
          Total: ${(priceAfterDiscount * product?.quantity).toFixed(2)}
        </p>
      </div>
    
     
    </div>
  );
}

export default AddOrderCard;
