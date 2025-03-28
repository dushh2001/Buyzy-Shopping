import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PayPalButton from "./PayPalButton";

const cart = {
  products: [
    {
      name: "Product 1",
      price: 100,
      color: "red",
      size: "M",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      name: "Product 2",
      price: 200,
      color: "blue",
      size: "L",
      image: "https://picsum.photos/200/300?random=2",
    },
  ],
  total: 300,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutID, setCheckoutId] = useState(null);
  const [ShippingAdress, setShippingAdress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment successful:", details);
    // Navigate to success page or show success message
    navigate("/order-confirmation");
  };

  return (
    <div className="grid gap-8 px-6 py-10 mx-auto tracking-tighter lg:grid-cols-2 max-w-7xl">
      {/* Left Section */}
      <div className="p-6 bg-white rounded-lg">
        <h2 className="mb-6 text-2xl font-semibold uppercase">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="mb-4 text-lg font-medium">Contact Details</h3>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              disabled
            />
          </div>
          <h3 className="mb-4 text-lg font-medium">Delivery</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium text-gray-700">First Name</label>
              <input
                type="text"
                value={ShippingAdress.firstName}
                onChange={(e) =>
                  setShippingAdress({
                    ...ShippingAdress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                value={ShippingAdress.lastName}
                onChange={(e) =>
                  setShippingAdress({
                    ...ShippingAdress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={ShippingAdress.address}
              onChange={(e) =>
                setShippingAdress({
                  ...ShippingAdress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium text-gray-700">City</label>
              <input
                type="text"
                value={ShippingAdress.city}
                onChange={(e) =>
                  setShippingAdress({
                    ...ShippingAdress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                value={ShippingAdress.postalCode}
                onChange={(e) =>
                  setShippingAdress({
                    ...ShippingAdress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Country</label>
            <input
              type="text"
              value={ShippingAdress.country}
              onChange={(e) =>
                setShippingAdress({
                  ...ShippingAdress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              value={ShippingAdress.phone}
              onChange={(e) =>
                setShippingAdress({
                  ...ShippingAdress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mt-6">
            {!checkoutID ? (
              <button
                type="submit"
                className="w-full py-3 text-white transition bg-black rounded hover:bg-gray-800"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="mb-4 text-lg font-medium">Pay with PayPal</h3>
                <PayPalButton
                  amount={cart.total}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment failed. Please try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="p-6 rounded-lg shadow-md bg-gray-50">
        <h3 className="mb-4 text-lg font-medium">Order Summary</h3>
        <div className="py-4 mb-4 border-t">
          {cart.products.map((product, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-20 h-24 mr-4 rounded"
                />
                <div>
                  <h3 className="font-semibold text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl font-medium">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-4 text-lg border-t">
          <p className="text-lg font-medium">Subtotal</p>
          <p className="text-xl font-semibold">${cart.total?.toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-between text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex items-center justify-between pt-4 mt-4 text-lg border-t">
          <p className="font-semibold">Total</p>
          <p className="text-xl font-semibold">${cart.total?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
