"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Array containing the image URL repeated 5 times
const images = Array(5).fill(
  "https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1710851923~exp=1710855523~hmac=3f53ff27e9cffd1d8d6b761106161836308f1aa84761d962a6e8d0feab719da1&w=996",
);

export default function BannerCarousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      pagination={{ dynamicBullets: true }}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      modules={[EffectFlip, Pagination, Navigation, Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className="flex items-center justify-center bg-background"
        >
          <Image
            src={image}
            width="700"
            height="400"
            loading="eager"
            alt={`slide-${index}`}
            className="h-full w-full object-scale-down"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
