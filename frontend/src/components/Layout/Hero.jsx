import heroImg from "../../assets/hero.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[600px] lg:h-[755px]">
      <img
        src={heroImg}
        alt="Buyzy"
        className="w-full h-[400px] md:h-[600px] lg:h-[755px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="p-6 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-wide uppercase md:text-8xl">
            ELEVATE YOUR <br /> LOOK
          </h1>
          <p className="mb-6 text-sm tracking-tight md:text-xl">
            Explore our outfits with fast world wide shipping
          </p>
          <Link
            to="#"
            className="px-6 py-2 text-sm bg-white rounded-sm md:text-xl text-gray-950"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
