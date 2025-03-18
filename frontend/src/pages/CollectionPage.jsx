import { useEffect, useState, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setproducts] = useState([]);
  const sideBarRef = useRef(null);
  const [isSidebaropen, setisSidebaropen] = useState(false);

  const toggleSidebar = () => {
    setisSidebaropen(!isSidebaropen);
  };

  const handleClickOutside = (e) => {
    //close the sidebar if clicked outside
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setisSidebaropen(false);
    }
  };

  useEffect(() => {
    //Add Event Listner for clicks
    document.addEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    setTimeout(() => {
      const fetchproducts = [
        {
          _id: 1,
          name: "Stylish Jacket",
          price: 100,
          images: [{ url: " https://picsum.photos/500/500?random=15" }],
        },
        {
          _id: 2,
          name: "Stylish Jacket",
          price: 100,
          images: [{ url: " https://picsum.photos/500/500?random=16" }],
        },
        {
          _id: 3,
          name: "Stylish Jacket",
          price: 100,
          images: [{ url: " https://picsum.photos/500/500?random=17" }],
        },
        {
          _id: 4,
          name: "Stylish Jacket",
          price: 100,
          images: [{ url: " https://picsum.photos/500/500?random=18" }],
        },
        {
          _id: 5,
          name: "Stylish Jacket",
          price: 100,
          images: [{ url: " https://picsum.photos/500/500?random=19" }],
        },
        {
          _id: 6,
          name: "Stylish Jacket",
          price: 100,
          images: [{ url: " https://picsum.photos/500/500?random=20" }],
        },
        {
          _id: 7,
          name: "Stylish Jacket",
          price: 100,
          images: [{ url: " https://picsum.photos/500/500?random=21" }],
        },
        {
          _id: 8,
          name: "Stylish Jacket",
          price: 100,
          images: [{ url: " https://picsum.photos/500/500?random=22" }],
        },
      ];
      setproducts(fetchproducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button onClick={toggleSidebar} className="flex items-center justify-center p-2 border lg:hidden">
        <FaFilter className="mr-2" />
      </button>

      {/* Filter Sidebar */}
      <div ref={sideBarRef} className={`${isSidebaropen ? "translate-x-0": "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-red-400 overflow-y-auto transition-transform duration-500 lg:static lg:translate-x-0 `}>
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="mb-4 text-2xl uppercase">All Colection</h2>

        {/* Sort Options  */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products}  />
      </div>
    </div>
  );
};

export default CollectionPage;
