import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFunction from "../../hooks/useFunction";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Recommendation from "../../components/Recommendation/Recommendation";

function ProductDetails() {
  const { addToDb } = useAuth();
  const { id } = useParams();
  const { isEmpty } = useFunction();
  const [product, setProduct] = useState({});

  const discountPrice = (
    product?.price -
    (product?.price * product?.discount) / 100
  ).toFixed(2);
  const handleAddToCart = () => {
    addToDb(product._id);
    toast.success("Product added to cart");
  };
  useEffect(() => {
    fetch(`https://easy-bazar-server.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (isEmpty(product)) {
    return <LoadingSpinner />;
  } else
    return (
      <div className="mx-6 my-10">
        <div className="grid md:grid-cols-3  gap-6">
          <div className="flex flex-col items-center">
            <div className="w-full mb-7">
              <img
                src={product?.mainImage?.url}
                alt={product?.name}
                className="w-full"
              />
            </div>
            {/* colors */}
            <div>
              <h2 className="text-xl font-bold">Available Colors</h2>
              <div className="flex gap-4 my-4">
                {product?.colors?.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-lg text-gray-400">{product.description}</p>
              <p className="text-2xl font-bold text-orange-400">
                ${discountPrice}
              </p>
              <div className="text-md flex items-center gap-2">
                <span className=" text-gray-500  line-through">
                  ${product?.price}
                </span>
                <span className=" text-black  mx-1">
                  - {product?.discount || 0}%
                </span>
              </div>
              <p className="badge badge-outline badge-warning font-bold my-2">
                Brand : {product.brand || "N/A"}
              </p>
              <p className="text-lg text-gray-400">
                Estimated Delivery:{" "}
                {product?.shipping_details?.estimated_delivery || "N/A"}
              </p>
              <div>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-warning mt-4 btn-outline btn-sm"
                >
                  Add to Cart
                </button>
                <button className="btn btn-warning mt-4 btn-sm ml-4">
                  Buy Now
                </button>
              </div>
            </div>
            {/* Product Future */}
            <div className="my-4">
              <h2 className="text-xl font-bold">Product Features</h2>
              <ul className="list-disc ml-6 text-lg list-inside">
                {product?.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="md:flex gap-4">
              {product?.images?.map((img, index) => (
                <img
                  src={img?.url}
                  alt={product?.name}
                  key={index}
                  className=""
                />
              ))}
            </div>
          </div>
        </div>
        <Recommendation />
      </div>
    );
}

export default ProductDetails;
