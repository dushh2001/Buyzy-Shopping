const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Product 1",
      color: "red",
      size: "M",
      price: 100,
      quantity: 1,
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      productId: "2",
      name: "Product 2",
      color: "blue",
      size: "L",
      price: 200,
      quantity: 1,
      image: "https://picsum.photos/200/300?random=2",
    },
  ],
  shippingaddress: {
    address: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

const OrderConfirmationPage = () => {

    const calculateEstimatedDelivery = (createdAt) => {
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 5); // Adding 5 days for estimated delivery
        return orderDate.toLocaleDateString(); // Format the date as needed
    }
    
  return (
    <div className="max-w-4xl p-6 mx-auto bg-white">
      <h1 className="mb-8 text-4xl font-bold text-center text-emerald-700">
        Thank you for your order 📦
      </h1>

      {checkout && (
        <div className="p-6 border rounded-lg">
          <div className="flex justify-between mb-10">
            {/* Order Id and Date */}
            <div>
                <h2 className="text-xl font-semibold">
                    Order ID: {checkout._id}
                </h2>
                <p className="text-gray-500">
                    Order date: {new Date(checkout.createdAt).toLocaleDateString()}
                </p>
            </div>
            {/* Estimated Delivery */}
            <div>
                <p className="text-sm text-emerald-700">
                    Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}
                </p>
            </div>
          </div>
          {/* Ordered Items */}
          <div className="mb-10">
            {checkout.checkoutItems.map((item) => (
                <div key={item.productId} className="flex items-center mb-4">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-16 h-16 mr-4 rounded-md"
                    />
                    <div>
                        <h4 className="font-semibold text-md">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                            {item.color} | {item.size} 
                        </p>
                    </div>
                    <div className="ml-auto etxt-right">
                        <p className="tetx-md">${item.price}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                </div>
            ))}
          </div>
          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-2 gap-8">
            {/* Payment Info */}
            <div>
                <h4 className="mb-2 text-lg font-semibold">
                    Payment Information
                </h4>
                <p className="text-gray-600">PayPal</p>
            </div>

            {/* Delivery Info */}
            <div>
                <h4 className="mb-3 text-lg font-semibold">Delivery Information</h4>
                    <p className="text-gray-600">
                        {checkout.shippingaddress.address}
                    </p>
                    <p className="text-gray-600">
                        {checkout.shippingaddress.city},{""} {checkout.shippingaddress.country}
                    </p>
                
            </div>
            
          </div>
          
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
