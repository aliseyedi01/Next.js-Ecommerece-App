"use client";

// swiper
import "swiper/css";
import "swiper/css/effect-fade";

import { Button } from "@components/ui/button";
import { BannersData } from "@data/banner-data";
// icons
import { ArrowRight, CircleArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerCarousel = () => {
  return (
    <Swiper
      loop={true}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="relative h-screen w-full bg-blue-100 dark:bg-blue-900"
    >
      {BannersData.map((image, index) => (
        <SwiperSlide
          key={index}
          className="!flex flex-col items-center justify-center gap-3 p-10 md:flex-row md:gap-10 md:px-40"
        >
          {/* Image Banner */}
          <Image
            src={image.src}
            width="200"
            height="200"
            loading="eager"
            quality={100}
            unoptimized={true}
            alt={`slide-${index}`}
            className="size-96 object-contain md:h-screen md:w-[38rem] md:p-12"
          />
          {/* Title & Button */}
          <div className="flex w-full flex-col !items-start justify-center gap-4 font-bold  text-blue-700 dark:text-white max-md:pb-10 md:w-1/2 md:items-center md:gap-10">
            <p className="font-ubuntu text-2xl font-medium tracking-wider md:w-80 md:text-5xl">
              {image.text}
            </p>
            <span className="font-ubuntu font-medium tracking-wide md:text-xl">
              {image.description}
            </span>
            <Link href="/products">
              <Button className="flex items-center gap-2 border-2 border-transparent  font-kanit  hover:border-yellow-500 md:h-16 md:w-56 md:text-xl">
                Discover More
                <ArrowRight className="h-6 w-6 text-yellow-400" />
              </Button>
            </Link>
          </div>
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
