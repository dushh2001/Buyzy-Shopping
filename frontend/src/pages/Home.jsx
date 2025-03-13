import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
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

const Home = () => {
  return (
    <div>
      <Hero />

      <GenderCollectionSection />

      <NewArrivals />

      {/* Best Seller */}
      <h2 className="mb-4 text-3xl font-bold text-center">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />

      <FeaturesSection />
    </div>
  );
};

export default Home;
