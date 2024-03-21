"use client";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";
// icons
import { ArrowRight, CircleArrowDown, icons } from "lucide-react";
import Link from "next/link";

const BannerData = [
  {
    src: "images/banners/gadget.svg",
    text: "Electronics Gadgets",
  },
  {
    src: "images/banners/fashion.svg",
    text: "Fashion Apparel",
  },
  {
    src: "images/banners/furnishing.svg",
    text: "HomeDecor Furnishings",
  },
  {
    src: "images/banners/health.svg",
    text: "Health Wellness",
  },
  {
    src: "images/banners/sports.svg",
    text: "Sports Fitness",
  },
  {
    src: "images/banners/food.svg",
    text: "Food Groceries",
  },
  {
    src: "images/banners/books.svg",
    text: "Books Literature",
  },
];

const BannerCarousel = () => {
  return (
    <Swiper
      loop={true}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      // pagination={{
      //   clickable: true,
      //   dynamicBullets: true,
      // }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      // modules={[Autoplay, Pagination, EffectFade]}
      className="relative h-screen w-full bg-blue-800"
    >
      {BannerData.map((image, index) => (
        <SwiperSlide
          key={index}
          className="!flex flex-col-reverse items-center justify-center p-10 md:flex-row"
        >
          <div className="flex w-full flex-col items-center justify-center gap-5 font-bold text-white max-md:pb-10 md:w-1/2">
            <p className="w-40 text-center text-4xl md:w-80 md:text-start md:text-7xl">
              {image.text}
            </p>
            <Link href="/products">
              <Button className="flex items-center gap-2 border-2 border-transparent  hover:border-yellow-500 md:h-16 md:w-80 md:text-2xl">
                Discover More
                <ArrowRight className="h-6 w-6 text-yellow-400" />
              </Button>
            </Link>
          </div>
          <Image
            src={image.src}
            width="200"
            height="200"
            loading="eager"
            quality={100}
            unoptimized={true}
            alt={`slide-${index}`}
            className="h-screen w-full object-contain md:w-1/2 "
          />
          <Link href="/#brands">
            <CircleArrowDown className="absolute bottom-2 left-[45%]  size-10 animate-bounce text-white md:left-1/2" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerCarousel;
