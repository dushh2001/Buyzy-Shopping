import { RiDeleteBin6Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productID: 1,
      name: "Product 1",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200/300?random=1",
    },

    {
      productID: 2,
      name: "Product 2",
      size: "L",
      color: "Blue",
      quantity: 2,
      price: 200,
      image: "https://picsum.photos/200/300?random=2",
    },

    {
      productID: 3,
      name: "Product 3",
      size: "S",
      color: "Green",
      quantity: 1,
      price: 150,
      image: "https://picsum.photos/200/300?random=3",
    },
  ]
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex items-start justify-between py-4 border-b border-gray-300">
          <div className="flex items-start">
            <img src={product.image} alt={product.name} className="object-cover w-20 h-24 mr-3 rounded" />
            <div className="ml-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">
                {product.size} | {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="px-2 py-0 text-xl font-medium border rounded">-</button>
                <span className="mx-4">{product.quantity}</span>
                <button className="px-2 py-0 text-xl font-medium border rounded">+</button>
              </div>
            </div>
          </div>
          <div>
          <p className="font-medium ">${product.price.toLocaleString()}</p>
          <button>
            <RiDeleteBin6Line className="w-5 h-5 mt-2 text-red-600" />
          </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContents;