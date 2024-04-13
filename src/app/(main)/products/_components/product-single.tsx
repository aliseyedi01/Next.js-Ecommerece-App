import { Badge } from "@components/ui";
import { sampleProductsImg } from "@constants/images";
import { DollarSign, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

import RatingStar from "./rating-start";

export default function ProductSingle() {
  return (
    <div className="group h-full w-full overflow-hidden rounded-lg bg-blue-200 transition duration-200 hover:shadow-lg hover:shadow-blue-100 hover:ring-1 hover:ring-blue-200  dark:hover:shadow-blue-900 dark:hover:ring-red-300">
      <div className=" flex h-full w-full flex-col rounded-lg">
        <div className="relative h-56 overflow-hidden md:h-96">
          <Image
            src={sampleProductsImg}
            alt="products"
            width={300}
            height={300}
            className="size-full"
          />
          {/* Favorites */}
          <div className="absolute right-2 top-2 md:right-4 md:top-4">
            <Heart className=" size-4 text-blue-500 md:size-6" />
            {/* <HeartFilledIcon className="size-6 text-blue-500" /> */}
          </div>
          {/* Badge */}
          <div className="absolute left-1 top-1  md:left-4 md:top-4">
            <Badge
              variant="outline"
              className=" bg-blue-100 text-xs font-normal text-blue-800 dark:border-blue-400 md:text-base"
            >
              New
            </Badge>
          </div>
          {/* Add to cart */}
          <div className="absolute bottom-0 flex w-full  cursor-pointer items-center justify-center gap-2 bg-blue-300/30 p-1 text-center text-ring group-hover:flex hover:flex md:hidden md:p-3 ">
            <ShoppingCart className="size-3 -translate-y-[2px] md:size-5" />
            <span className=" text-xs font-normal md:text-base  md:font-medium">
              Add To Cart
            </span>
          </div>
        </div>
        {/* Information */}
        <div className="space-y-1 bg-white px-2 py-1 md:space-y-2  md:p-4">
          {/* Title */}
          <span className="font-exo text-sm font-medium text-primary md:text-lg">
            This is a sample
          </span>
          {/* Start & Price */}
          <div className="flex w-full items-center justify-between gap-1 ">
            <p className="flex items-center gap-[2px] font-kanit font-semibold tracking-wide text-primary/80">
              <DollarSign className="size-3 md:size-4" />
              <span className="text-sm md:text-lg">120</span>
            </p>
            <RatingStar rating={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
