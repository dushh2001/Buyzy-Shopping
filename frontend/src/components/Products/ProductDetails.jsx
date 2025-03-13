import { useEffect, useState } from "react";
import { toast } from "sonner";

const selectProducts = {
  name: "Stylish Jacket",
  price: 100,
  originalPrice: 200,
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
  brand: "Nike",
  material: "Cotton",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=9",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=10",
      altText: "Stylish Jacket 2",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectProducts?.images?.length > 0) {
      setMainImage(selectProducts.images[0].url);
    }
  }, [selectProducts]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart", {
        duration: 3000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart", { duration: 3000 });
      setIsButtonDisabled(false);
    }, 1500);
  };

  return (
    <div className="p-10">
      <div className="max-w-6xl p-8 mx-auto bg-white rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="flex-col hidden mr-6 space-y-4 md:flex">
            {selectProducts.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className={`w-20 h-20 border rounded-lg cursor-pointer ${
                  mainImage === image.url
                    ? "border-gray-800"
                    : "border-gray-200"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnails */}
          <div className="flex mb-4 space-x-4 md:hidden overscroll-x-scroll">
            {selectProducts.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className={`w-20 h-20 border rounded-lg cursor-pointer ${
                  mainImage === image.url
                    ? "border-gray-800"
                    : "border-gray-200"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right Side  */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
              {selectProducts.name}
            </h1>
            <p className="mb-1 text-lg text-gray-600 line-through">
              {selectProducts.originalPrice &&
                `${selectProducts.originalPrice} USD`}
            </p>
            <p className="mb-2 text-xl text-gray-500">
              ${selectProducts.price} USD
            </p>
            <p className="mb-4 text-gray-800">{selectProducts.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectProducts.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 border-2 rounded-full ${
                      selectedColor === color
                        ? "border-gray-800"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectProducts.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center mt-2 space-x-4">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 text-lg bg-gray-200 rounded "
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 text-lg bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`w-full px-6 py-2 mb-4 text-white bg-gray-800 rounded ${
                isButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-700"
              }`}
            >
              {isButtonDisabled ? "Adding to cart..." : "Add to Cart"}
            </button>

            <div className="mt-1 text-gray-700">
              <h3 className="mb-6 text-xl font-bold">Characteristics:</h3>
              <table className="w-full text-sm text-left text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1 font-bold">Brand</td>
                    <td className="py-1">{selectProducts.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold">Material</td>
                    <td className="py-1">{selectProducts.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
