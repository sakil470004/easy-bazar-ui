import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import CartPageCard from "./CartPageCard";
import { remove } from "firebase/database";

function CartPage() {
  const [products, setProducts] = useState([]);
  const { getShoppingCart, deleteShoppingCart } = useAuth();

  const updateProducts = (product) => {
    console.log(product);
    let newProduct = [];
    products.map((p) => {
      if (p._id === product._id) {
        if (product.quantity > 0) {
          newProduct.push(product);
        }
      } else {
        newProduct.push(p);
      }
    });
    setProducts(newProduct);
  };
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const cartData = getShoppingCart();
        const cartProducts = Object.keys(cartData).map((key) => {
          const product = data.find((product) => product._id === key);
          return { ...product, quantity: cartData[key] };
        });

        setProducts(cartProducts);
      });
  }, []);
  return (
    <div className="mx-6 my-10 grid md:grid-cols-3 gap-5 ">
      <div className="md:col-span-2 bg-gray-50 p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4 text-yellow-400 font-bold uppercase">
          Carts {products.length} Items
        </h1>
        {products?.length === 0 ? (
          <div className="text-center text-2xl font-bold">
            No Product Cart Yet
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <CartPageCard
                key={product._id}
                product={product}
                updateProducts={updateProducts}
              />
            ))}
          </div>
        )}
      </div>
      <div className="min-h-72 max-h-96 flex flex-col justify-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4 text-yellow-400 font-semibold uppercase">
          Order Summery
        </h1>
        {products.length === 0 ? (
          <div className="text-2xl font-bold text-center">Cart is Empty</div>
        ) : (
          <div className="flex flex-col justify-center bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between mt-5">
              <p className="text-lg">Total Items:</p>
              <p className="text-lg">{products.length}</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-lg">Total Quantity:</p>
              <p className="text-lg">
                {products.reduce((acc, product) => acc + product.quantity, 0)}
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-lg">Total Price:</p>
              <p className="text-lg">
                $
                {products
                  .reduce(
                    (acc, product) =>
                      acc + product.quantity * product.price - product.discount,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
            {/* shipping fee */}
            <div className="flex justify-between mt-5">
              <p className="text-lg">Shipping Fee:</p>
              <p className="text-lg">$10</p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <button className="btn btn-sm btn-warning">Checkout</button>
              <button
                onClick={() => {
                  deleteShoppingCart();
                  setProducts([]);
                }}
                className="btn btn-sm btn-outline"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
