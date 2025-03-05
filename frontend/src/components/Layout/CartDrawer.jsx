import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 sm:w-1/2 w-3/4 md:w-[30rem] h-full bg-white shadow-2xl transform transition-all duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Cart contents */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="mb-4 text-xl font-semibold"> Your Cart</h2>
        <CartContents />
      </div>

      {/* Checkout Button */}
      <div className="p-4">
        <button className="w-full py-2 text-white transition-all bg-gray-800 rounded hover:bg-black">
          Proceed to Checkout
        </button>
        <p className="mt-2 text-xs text-center text-gray-800">
          Shipping taxers and discounts are calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
