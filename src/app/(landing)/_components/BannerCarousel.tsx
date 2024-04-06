"use client";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "@components/ui/button";
// icons
import { ArrowRight, CircleArrowDown, icons, ChevronsDown } from "lucide-react";
import Link from "next/link";
import { BannersData } from "@data/banner-data";

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
      className="relative h-screen w-full bg-blue-100 dark:bg-blue-900"
    >
      {BannersData.map((image, index) => (
        <SwiperSlide
          key={index}
          className="!flex flex-col-reverse items-center justify-center p-10 md:flex-row"
        >
          <div className="flex w-full flex-col items-start  justify-center gap-5 font-bold text-blue-700 dark:text-white max-md:pb-10 md:w-1/2 md:items-center md:gap-10">
            <p className="w-40 text-left text-4xl tracking-widest md:w-80 md:text-start md:text-7xl">
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
            className="h-screen w-full object-contain md:w-[50%] md:p-12"
          />
        </SwiperSlide>
      ))}
      <Link
        href="/#brands"
        className="absolute bottom-2 left-1/2 z-50 hidden -translate-x-1/2 transform md:flex"
      >
        <CircleArrowDown className="size-7 animate-bounce text-blue-600 dark:text-white md:size-10" />
      </Link>
    </Swiper>
  );
};

export default BannerCarousel;
