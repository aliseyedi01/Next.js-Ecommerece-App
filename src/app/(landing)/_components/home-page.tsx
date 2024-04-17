import BannerCarousel from "./banner-carousel";
import Brands from "./Brands";
import Categories from "./categories";
import FaqList from "./faq-list";
import FeaturedProducts from "./featured-products";
import Features from "./features";
import Newsletter from "./news-letter";

const HomePage = () => {
  return (
    <div className="bg-blue-40 flex h-full w-full -translate-y-12 flex-col items-center justify-center  md:-translate-y-14">
      <BannerCarousel />
      <Categories />
      <Brands />
      <FeaturedProducts />
      <Features />
      <FaqList />
      <Newsletter />
    </div>
  );
};

export default HomePage;
