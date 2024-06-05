import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { get } from "firebase/database";
import CartPageCard from "./CartPageCard";

function CartPage() {
  const [products, setProducts] = useState([]);
  const { getShoppingCart } = useAuth();
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
        <h1 className="text-2xl text-yellow-400 font-bold uppercase">Carts</h1>
        <div>{
            products.map((product) => (
                <CartPageCard key={product._id} product={product} />
            ))
 }</div>
      </div>
      <div className="h-72  bg-gray-50 p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl text-yellow-400 font-semibold uppercase">
          Order Summery
        </h1>
      </div>
    </div>
  );
}

export default CartPage;
