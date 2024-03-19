"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Array containing the image URL repeated 5 times
const images = [
  "https://png.pngtree.com/background/20230521/original/pngtree-d-rendered-image-of-a-blue-pedestal-with-a-green-tree-picture-image_2684064.jpg",
  "https://png.pngtree.com/background/20230521/original/pngtree-blue-tree-on-a-circular-pedestal-picture-image_2684099.jpg",
  "https://png.pngtree.com/background/20230527/original/pngtree-3d-rendering-of-a-blue-tree-on-a-pedestal-picture-image_2754246.jpg",
];

export default function BannerCarousel() {
  return (
    <Swiper
      slidesPerView="auto"
      loop={true}
      effect="fade"
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="h-full w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className=" ">
          <Image
            src={image}
            width="700"
            height="400"
            loading="eager"
            quality={100}
            unoptimized={true}
            alt={`slide-${index}`}
            className="h-full w-full object-cover md:object-center "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
