import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: " PayPal",
      shippingMethod: "Standard Shipping",
      shippingAddress: {
        city: "New York",
        country: "USA",
      },
      orderItems: [
        {
          productId: "123",
          name: "Product 1",
          price: 29.99,
          quantity: 2,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "456",
          name: "Product 2",
          price: 19.99,
          quantity: 2,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="p-4 mx-auto max-w-7xl sm:p-6">
      <h2 className="mb-6 font-bold tetx-2xl md:text-3xl">Order Details</h2>
      {!orderDetails ? (
        <p>No Order Details Found</p>
      ) : (
        <div className="p-4 border rounded-lg sm:p-6">
          {/* Order Details */}
          <div className="flex flex-col justify-between mb-8 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                Order ID: {orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start mt-4 sm:items-end sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "text-green-700 bg-green-100"
                    : "text-red-700 bg-red-100"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "text-green-700 bg-green-100"
                    : "text-yellow-700 bg-yellow-100"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>
          {/* Customer, Payment, Shipping Info */}
          <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-lg font-semibold">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>
          {/* Payment List */}
          <div className="overfloe-x-auto">
            <h4 className="mb-4 text-lg font-semibold">Products</h4>
            <table className="min-w-full mb-4 text-gray-600">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Unit Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr
                    key={item.productId}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="flex items-center px-4 py-2">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 mr-4 rounded-lg objct-cover"
                        />
                        <Link
                          to={`/product/${item.productId}`}
                          className="text-blue-600 hover:underline"
                        >
                          {item.name}
                        </Link>
                      </div>
                    </td>
                    <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back to Orders Link */}
          <Link to={"/my-orders"} className="text-green-600 hover:underline">
            Back to My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
