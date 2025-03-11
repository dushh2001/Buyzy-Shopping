import { useEffect, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="container relative mx-auto mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold ">Explore New Arrivals</h2>
        <p className="mb-8 text-lg text-gray-600">
          Discover the latest trends in fashion and freshly picked styles.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 text-black bg-white border rounded">
            <FiChevronLeft className="w-4 h-4 text-2xl" />
          </button>
          <button className="p-2 text-black bg-white border rounded">
            <FiChevronRight className="w-4 h-4 text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="container relative flex mx-auto space-x-6 overflow-x-scroll">
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] relative sm:min-w-[50%] lg:min-w-[30%]"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-50 rounded-b-lg backdrop-blur-md">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium ">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
