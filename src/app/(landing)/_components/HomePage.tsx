import BannerCarousel from "./BannerCarousel";
import Brands from "./Brands";
import Categories from "./Categories";
import FaqList from "./FaqList";
import Features from "./Features";
import Newsletter from "./news-letter";

const HomePage = () => {
  return (
    <div className="bg-blue-40 flex h-full w-full -translate-y-12 flex-col items-center justify-center  md:-translate-y-14">
      <BannerCarousel />
      <Categories />
      <Brands />
      <Features />
      <FaqList />
      <Newsletter />
    </div>
  );
};

export default HomePage;
