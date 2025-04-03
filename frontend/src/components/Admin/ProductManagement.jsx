import React from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      category: "Category 1",
      price: 100,
      sku: "123123123",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category 2",
      price: 200,
      sku: "123123123",
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category 3",
      price: 150,
      sku: "123123123",
    },
    {
      id: 4,
      name: "Product 4",
      category: "Category 4",
      price: 300,
      sku: "123123123",
    },
    {
      id: 5,
      name: "Product 5",
      category: "Category 5",
      price: 250,
      sku: "123123123",
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      // Call the API to delete the product
      console.log(`Product with id ${id} deleted`);
    }
  };

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-6 text-2xl font-bold">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-black">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b cursor-pointer hover:bg-gray-50"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 "
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-2 py-0.5 rounded hover:bg-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
