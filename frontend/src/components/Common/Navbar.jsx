import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDraweropen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDraweropen);
  };

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
            className="text-sm font-bold text-gray-600 uppercase hover:text-black"
          >
            Men
          </Link>
          <Link
            to="/"
            className="text-sm font-bold text-gray-600 uppercase hover:text-black"
          >
            Women
          </Link>
          <Link
            to="/"
            className="text-sm font-bold text-gray-600 uppercase hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to="/"
            className="text-sm font-bold text-gray-600 uppercase hover:text-black"
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

          {/* Mobile-Menu */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-2xl transform transition-all duration-300 z-50 ${
          navDraweropen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button>
            <IoMdClose
              className="w-6 h-6 text-gray-700"
              onClick={toggleNavDrawer}
            />
          </button>
        </div>
        <div className="p-4">
          <h2 className="mb-4 text-2xl font-semibold">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-grey-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-grey-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-grey-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-grey-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
