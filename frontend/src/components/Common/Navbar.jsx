import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Left-Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-violet-950">
            Buyzy
          </Link>
        </div>
        {/* Center-Nav Links */}
        <div className="hidden space-x-6 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Men
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Women
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right-Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black-700">
            <HiOutlineUser className="w-6 h-6" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
            <span className="absolute px-2 py-0.5 text-xs text-white rounded-full -top-1 bg-violet-950">
              6
            </span>
          </button>
          {/* Search-Icon */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Navbar;
