import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="container grid grid-cols-1 gap-8 mx-auto text-center md:grid-cols-3">
        {/* Feature 1  */}
        <div className="flex flex-col items-center">
          <div className="p-4 mb-4 rounded-full">
            <HiShoppingBag className="text-3xl" />
          </div>
          <h4 className="mb-1 tracking-tighter">
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-sm tracking-tighter text-gray-600">
            On all orders over $100.00
          </p>
        </div>

         {/* Feature 2  */}
         <div className="flex flex-col items-center">
          <div className="p-4 mb-4 rounded-full">
            <HiArrowPathRoundedSquare className="text-3xl" />
          </div>
          <h4 className="mb-1 tracking-tighter">
            45 DAYS RETURN
          </h4>
          <p className="text-sm tracking-tighter text-gray-600">
            Money back guarantee
          </p>
        </div>

         {/* Feature 3  */}
         <div className="flex flex-col items-center">
          <div className="p-4 mb-4 rounded-full">
            <HiOutlineCreditCard className="text-3xl" />
          </div>
          <h4 className="mb-1 tracking-tighter">
            SECURE CHECKOUT
          </h4>
          <p className="text-sm tracking-tighter text-gray-600">
            100% protected by our secure payment system
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
