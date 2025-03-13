import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";

const FeaturedCollection = () => {
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="container flex flex-col-reverse items-center mx-auto overflow-hidden shadow-lg lg:flex-row bg-green-50 rounded-3xl">
        
        {/* Left Content */}
        <div className="p-8 text-center lg:w-1/2 lg:p-12 lg:text-left">
          <h2 className="mb-2 text-lg font-semibold text-green-700">
            Comfort & Style
          </h2>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
            Apparel Made for Your Everyday Life
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Discover the latest fashion trends and express your personality with 
            our comfortable, stylish apparel—designed to make you look and feel great every day.
          </p>
          <Link
            to="/collections/all"
            className="inline-block px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-gray-900 rounded-md shadow-md hover:bg-gray-700"
          >
            Shop Now
          </Link>
        </div> 

        {/* Right Content (Image) */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className="object-cover w-full h-full lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedCollection;
