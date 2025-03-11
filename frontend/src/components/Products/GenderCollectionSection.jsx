import womensCollection from "../../assets/womens-collection.webp";
import mensCollection from "../../assets/mens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="container flex flex-col gap-8 mx-auto md:flex-row">
        {/* Womens Collection */}
        <div className="relative flex-1">
          <img
            src={womensCollection}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute p-4 bg-white bottom-8 left-8 bg-opacity-90">
            <h2 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
              Women's Collection
            </h2>
            <Link to="/collections/all?gender=Women" className="text-sm text-gray-900 underline md:text-xl">
              Shop Now
            </Link>
          </div>
        </div>

         {/* Mens Collection */}
         <div className="relative flex-1">
          <img
            src={mensCollection}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute p-4 bg-white bottom-8 left-8 bg-opacity-90">
            <h2 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
              Men's Collection
            </h2>
            <Link to="/collections/all?gender=men" className="text-sm text-gray-900 underline md:text-xl">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
