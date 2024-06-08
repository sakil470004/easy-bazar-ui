import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import AddOrderCard from "./AddOrderCard";

export default function AddOrder() {
  const { buyItems, setBuyItems, user } = useAuth();
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState({});

  const totalPrice = products?.reduce((acc, item) => {
    return (
      acc + item.quantity * item.price * (1 - item.discount / 100).toFixed(2)
    );
  }, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const address = e.target[3].value;
    const payment = e.target[4].value;

    const order = {
      name,
      email,
      phone,
      address,
      paymentMethod: payment,
      products,
      totalPrice,
      orderTime: new Date(),
    };
    console.log(order);
    // fetch("https://easy-bazar-server.vercel.app/addOrder", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       alert("Order Placed Successfully");
    //       setBuyItems([]);
    //     }
    //   });
  };
  useEffect(() => {
    fetch(`https://easy-bazar-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, [user]);
  useEffect(() => {
    setProducts(buyItems);
  }, []);
  return (
    <div className="my-6 ">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Add Order
      </h2>
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2">
        {products.map((item) => (
          <AddOrderCard product={item} key={item._id} />
        ))}
      </div>
      {/* Here is user Info for product purchase */}
      <div className="mt-6">
        <h2 className="text-xl mb-2 font-bold text-orange-400 uppercase">
          User Information
        </h2>
        <form onSubmit={handlePlaceOrder} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              defaultValue={userData?.name || ""}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              defaultValue={userData?.email || ""}
              placeholder="Enter Email"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone"
              defaultValue={userData?.phone || ""}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              placeholder="Enter Address"
              defaultValue={userData?.address || ""}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="payment">Payment Method</label>
            <select
              id="payment"
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option value="cash on delivery">Cash On Delivery</option>
              <option value="bkash">Bkash</option>
              <option value="rocket">Rocket</option>
            </select>
          </div>
          <div className="flex font-bold text-xl mx-2 justify-between">
            <p className="text-lg">Total Price:</p>
            <p className="text-lg">${totalPrice}</p>
          </div>
          <button className="bg-yellow-400 p-2 rounded-lg text-white">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
