"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import ProductSingle from "@app/(main)/products/_components/product-single";
import Container from "@components/utility/container";
import Link from "next/link";
import React from "react";
import { FreeMode, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FeaturedProducts() {
  return (
    <div className="h-full w-full">
      <Container>
        <div className="flex h-full w-full flex-col gap-3  rounded-lg border bg-blue-200 p-3">
          {/* Title */}
          <h3 className="text-xl font-semibold text-blue-900">
            Featured Products
          </h3>
          <div className="w-full">
            <Swiper
              slidesPerView="auto"
              spaceBetween={25}
              freeMode={true}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[FreeMode, Navigation, Keyboard]}
              // modules={[FreeMode, Navigation, Keyboard, Pagination]}
              className="h-full md:h-96 "
            >
              {Array.from({ length: 8 }, (_, index) => (
                <SwiperSlide key={index} className="h-full !w-40 md:!w-72">
                  <Link href="/product" className="w-full">
                    <ProductSingle />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}
