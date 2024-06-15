import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://easy-bazar-server.vercel.app/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  return (
    <div className="my-6 ">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Order list
      </h2>
      <div className="overflow-x-auto my-5">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Names</th>
              <th>Product Type</th>
              <th>Price</th>
              <th>Shipping Address</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order?.products?.map((or) => `${or?.name} ,`)}</td>
                <td>{order?.products?.length}</td>
                <td>{order?.totalPrice?.toFixed(2)}</td>
                <td>{order?.address}</td>
                <td>{order?.orderTime}</td>
                <td>{order?.status}</td>
              </tr>
            ))}
            {
              orders.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center font-bold text-2xl">
                    No Orders Found
                  </td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Shipping Address</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Orders;
