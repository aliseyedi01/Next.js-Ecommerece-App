import BannerCarousel from "./BannerCarousel";
import Brands from "./Brands";
import FaqList from "./FaqList";
import Features from "./Features";
import Newsletter from "./NewsLetter";

const HomePage = () => {
  return (
    <div className="bg-blue-40 flex h-full w-full -translate-y-14 flex-col items-center justify-center  md:-translate-y-20">
      <BannerCarousel />
      <Brands />
      <Features />
      <FaqList />
      <Newsletter />
    </div>
  );
};

export default HomePage;
