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
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BannerData = [
  {
    src: "https://png.pngtree.com/background/20230521/original/pngtree-d-rendered-image-of-a-blue-pedestal-with-a-green-tree-picture-image_2684064.jpg",
    text: "Electronics & Gadgets",
  },
  {
    src: "https://png.pngtree.com/background/20230521/original/pngtree-blue-tree-on-a-circular-pedestal-picture-image_2684099.jpg",
    text: "Fashion & Apparel",
  },
  {
    src: "https://png.pngtree.com/background/20230527/original/pngtree-3d-rendering-of-a-blue-tree-on-a-pedestal-picture-image_2754246.jpg",
    text: "Home Decor & Furnishings",
  },
  {
    src: "https://png.pngtree.com/background/20230521/original/pngtree-d-rendered-image-of-a-blue-pedestal-with-a-green-tree-picture-image_2684064.jpg",
    text: "Health & Wellness Essentials",
  },
  {
    src: "https://png.pngtree.com/background/20230521/original/pngtree-blue-tree-on-a-circular-pedestal-picture-image_2684099.jpg",
    text: "Outdoor & Adventure Gear",
  },
];

const BannerCarousel = () => {
  return (
    <Swiper
      loop={true}
      effect="fade"
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      className="relative h-full w-full"
    >
      {BannerData.map((image, index) => (
        <SwiperSlide key={index} className="">
          <Image
            src={image.src}
            width="700"
            height="400"
            loading="eager"
            quality={100}
            unoptimized={true}
            alt={`slide-${index}`}
            className=" h-full w-full object-cover hover:opacity-10 md:object-center "
          />
          <div className="absolute inset-0 flex h-full w-full flex-col items-start justify-end gap-5 pb-24 pl-6 font-bold text-white md:pb-40 md:pl-40">
            <p className="text-start text-4xl md:text-7xl">{image.text}</p>
            <Link href="/products">
              <Button className="flex items-center gap-2 md:h-16 md:w-72 md:text-2xl ">
                Discover More
                <ArrowRight className="h-6 w-6 text-yellow-400" />
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerCarousel;
