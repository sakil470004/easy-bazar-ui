import React from "react";

function UserInfo({ userData, products }) {
  const totalPrice = products?.reduce((acc, product) => {
    return acc + product.quantity * product.price - product.discount;
  }, 0);
  return (
    <div className="mt-6">
      <h2 className="text-xl mb-2 font-bold text-orange-400 uppercase">
        User Information
      </h2>
      <form className="flex flex-col gap-4">
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
            <option value="cash">Cash On Delivery</option>
            <option value="bkash">Bkash</option>
            <option value="rocket">Rocket</option>
          </select>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">Total Price:</p>
          <p className="text-lg">${totalPrice.toFixed(2)}</p>
        </div>
        <button className="bg-yellow-400 p-2 rounded-lg text-white">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default UserInfo;
