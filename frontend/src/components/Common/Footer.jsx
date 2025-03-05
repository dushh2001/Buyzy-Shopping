import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 boder-t">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4 lg:px-0">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Newsletter
          </h3>
          <p className="mb-4 text-gray-500 ">
            Be the first to hear about the latest trends, new arrivals and
            exclusive offers.
          </p>
          <p className="mb-6 text-sm font-medium text-gray-600">
            sign up and get 10% off your first order
          </p>

          {/* Newsletter Form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm transition-all border-t border-b border-l border-grey-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm text-white transition-all bg-gray-800 rounded-r-md hover:bg-gray-600 "
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* shop Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Shop</h3>
          <ul className="space-y-2 test-gray-600">
            <li>
              <Link to="/" className="hover:text-gray-600">
                Men's Top wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600">
                Women's Top wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600">
                Men's Bottom wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600">
                Women's Bottom wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Support</h3>
          <ul className="space-y-2 test-gray-600">
            <li>
              <Link to="/" className="hover:text-gray-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Follow Us
          </h3>
          <div className="flex items-center mb-6 space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXLine className="w-6 h-6" />
            </a>
          </div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Call Us</h3>
          <p>
            <FiPhoneCall className="inline-block w-5 h-5 mr-2 text-gray-500" />
            +94 77 646 5906
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container px-4 pt-6 mx-auto mt-12 text-center border-t border-gray-200 lg:px-0">
        <p>
          <span className="tracking-tight text-gray-500">
            © 2025 Buyzy. All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
