import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term :", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-2 pr-12 bg-gray-200 rounded-lg focus-outline-none placeholder:text-gray-700 "
            />
            { /* Search Icon */}
            <button type="submit">
                <HiMagnifyingGlass className="absolute w-6 h-6 text-gray-700 transform -translate-y-1/2 top-1/2 right-4" />
            </button>
          </div>
          {/* Close Icon */}
          <button type="button">
            <HiMiniXMark className="w-6 h-6 text-gray-700" onClick={handleSearchToggle} />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="w-6 h-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
