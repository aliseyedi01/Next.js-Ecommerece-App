import BannerCarousel from "./BannerCarousel";
import Brands from "./Brands";

const HomePage = () => {
  return (
    <div className="bg-blue-40 flex h-full w-full -translate-y-14 flex-col  md:-translate-y-20">
      <BannerCarousel />
      <Brands />
    </div>
  );
};

export default HomePage;
