import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="p-4 bg-white rounded-lg">
            <div className="w-full mb-4 h-96">
              <img
                src={product.images[0].url}
                alt={product.images[0].alText || product.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <h2 className="mb-1 text-lg">{product.name}</h2>
            <p className="tracking-tighter text-gray-600 ont-medium ">
              {product.price} USD
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
