import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const FilterSidebar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: "",
    material: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Gray",
    "Pink",
    "Navy",
    "Beige",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Polyester",
    "Silk",
    "Wool",
    "Linen",
    "Denim",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fasionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];

  // Update the filter state when the searchParams change
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  // Update the filter state when the filter changes
  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filter };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilter(newFilters);
    updateURLParams(newFilters);
  };

  // Update the URL params when the filter state changes
  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  }

  // Update the price range filter
  const handlePriceRangeChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice])
    const newFilters = { ...filter, minPrice: 0, maxPrice: newPrice };
    setFilter(newFilters);
    updateURLParams(newFilters);
  }

  return (
    <div className="p-7">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filter.category === category}
              className="w-4 h-4 mr-2 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-800">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-2">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filter.gender === gender}
              className="w-4 h-4 mr-2 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-800">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-8 h-8 transition border border-gray-300 rounded-full cursor-pointer hover:scale-105 focus:ring-2 focus:ring-blue-500 ${filter.color === color ? "ring-2 ring-blue-500" : ""}`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filter.size.includes(size)}
              className="w-4 h-4 mr-2 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">
          Materials
        </label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filter.material.includes(material)}
              className="w-4 h-4 mr-2 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brands Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Brands</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filter.brand.includes(brand)}
              className="w-4 h-4 mr-2 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <label className="block mb-2 font-medium text-gray-600">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceRangeChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-gray-600">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
