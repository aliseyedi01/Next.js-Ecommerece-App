import BannerCarousel from "./BannerCarousel";
import Brands from "./Brands";
import Features from "./Features";

const HomePage = () => {
  return (
    <div className="bg-blue-40 flex h-full w-full -translate-y-14 flex-col items-center justify-center  md:-translate-y-20">
      <BannerCarousel />
      <Brands />
      <Features />
    </div>
  );
};

export default HomePage;
