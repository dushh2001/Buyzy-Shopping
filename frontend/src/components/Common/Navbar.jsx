import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to="/" className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Men
          </Link>
          <Link to="/" className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Women
          </Link>
          <Link to="/" className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Top Wear
          </Link>
          <Link to="/" className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Bottom Wear
          </Link>
        </div>

        {/* Right-Icons */}
        <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-black-700">
                <HiOutlineUser className="w-6 h-6"/>
            </Link>
            <button className="relative hover:text-black">
                <HiOutlineShoppingBag className="w-6 h-6 text-gray-700"/>
                <span className="absolute px-2 py-0.5 text-xs text-white rounded-full -top-1 bg-violet-950">0</span>
            </button>
            {/* Search-Icon */}

            <button className="md:hidden">
                <HiBars3BottomRight className="w-6 h-6 text-gray-700"/>
            </button> 
        </div>
      </nav>
    </>
  );
};

export default Navbar;
