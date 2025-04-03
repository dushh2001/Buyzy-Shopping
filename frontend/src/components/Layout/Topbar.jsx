import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="text-white bg-black">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* icons */}
        <div className="items-center hidden space-x-4 md:flex">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="w-4 h-4" />
          </a>
        </div>

        {/* text */}
        <div className="flex-grow text-sm text-center">
          <span>We ship worldwide - Fast & relible shipping</span>
        </div>

        {/* Tel-No */}
        <div className="hidden text-sm md:block">
          <a href="tel:+94776465906" className="hover:text-gray-300">
            +94 77 646 5906
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
