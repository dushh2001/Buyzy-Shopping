import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //simulate fetching orders
    setTimeout(() => {
      const makeOrders = [
        {
          _id: 12345,
          createdAt: new Date(),
          shippingAddress: { city: "Colombo", country: "Sri Lanka" },
          orderItems: [
            {
              name: "Nike Slim Shirt",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: 67890,
          createdAt: new Date(),
          shippingAddress: { city: "Colombo", country: "Sri Lanka" },
          orderItems: [
            {
              name: "Nike Slim Short",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 100,
          isPaid: false,
        },
      ];

      setOrders(makeOrders);
    }, 1000);
  }, []);

  return (
    <div className="p-4 mx-auto max-w-7xl sm:p-6">
      <h2 className="mb-6 text-xl font-bold sm:text-2xl">My Orders</h2>
      <div className="relative overflow-hidden shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-2 sm:py-3">Image</th>
              <th className="px-4 py-2 sm:py-3">Order ID</th>
              <th className="px-4 py-2 sm:py-3">Created</th>
              <th className="px-4 py-2 sm:py-3">Shipping Address</th>
              <th className="px-4 py-2 sm:py-3">Item</th>
              <th className="px-4 py-2 sm:py-3">Price</th>
              <th className="px-4 py-2 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-2 py-2 sm:py-2 sm:px-2">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="object-cover w-10 h-10 rounded-lg sm:w-12 sm:h-12"
                    />
                  </td>
                  <td className="px-4 py-4 font-medium text-gray-900 sm:py-2 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="px-4 py-4 text-gray-500 sm:py-2">
                    {order.createdAt.toLocaleString()}
                  </td>
                  <td className="px-4 py-4 text-gray-900 sm:py-2">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-4 py-4 text-gray-900 sm:py-2">
                    {order.orderItems.length}
                  </td>
                  <td className="px-4 py-4 text-gray-900 sm:py-2">
                    ${order.totalPrice}
                  </td>
                  <td className="px-4 py-4 text-gray-900 sm:py-2">
                    <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {order.isPaid ? "Paid" : "Not Paid"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-4 text-center text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
