"use client";

// swiper
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/navigation";
import "swiper/css/thumbs";

import { TShirt1, TShirt2, TShirt3, TShirt4 } from "@constants/images";
import Image from "next/image";
import React, { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PreviewProductData = [TShirt1, TShirt2, TShirt3, TShirt4];

export default function PreviewProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:w-1/2">
      {/* Images Preview */}
      <Swiper
        spaceBetween={20}
        navigation={true}
        direction="horizontal"
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="size-[20rem] rounded-lg md:size-[30rem]"
      >
        {PreviewProductData.map((image, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex h-full w-full place-items-center ">
              <Image
                src={image.src}
                alt="About Us Image"
                width={500}
                height={500}
                className="size-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        direction="horizontal"
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="preview-product-swiper h-20 w-10/12  border-blue-600  md:w-96"
      >
        {PreviewProductData.map((image, index) => (
          <SwiperSlide key={index} className="">
            <Image
              src={image.src}
              alt="products"
              width={100}
              height={300}
              className=" size-full  rounded-3xl object-scale-down"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
