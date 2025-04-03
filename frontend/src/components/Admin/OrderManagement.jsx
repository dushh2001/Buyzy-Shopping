const OrderManagement = () => {
  const orders = [
    {
      _id: 123123123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "processing",
    },
  ];

  const handleStatusChange = (orderId, status) => {
    console.log(`Order ID: ${orderId}, New Status: ${status}`);
  };

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-6 text-2xl font-bold">Order Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Total Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b cursor-pointer hover:bg-gray-50"
                >
                  <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="px-4 py-4">{order.user.name}</td>
                  <td className="px-4 py-4">${order.totalPrice}</td>
                  <td className="px-4 py-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="p-2.5 bg-gray-50 text-gray-900 text-sm block border focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-800"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
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

export default OrderManagement;
