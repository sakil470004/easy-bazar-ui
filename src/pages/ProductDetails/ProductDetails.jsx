import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const discountPrice = (
    product?.price -
    (product?.price * product?.discount) / 100
  ).toFixed(2);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

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
              <span className=" text-black  mx-1">- {product?.discount}%</span>
            </div>
            <div>
              <button className="btn btn-warning mt-4 btn-outline btn-sm">
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
    </div>
  );
}

export default ProductDetails;