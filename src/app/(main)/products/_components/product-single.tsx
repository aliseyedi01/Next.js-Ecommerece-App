import { Button, Badge } from "@components/ui";
import { sampleProductsImg } from "@constants/images";
import { DollarSign, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import RatingStar from "./rating-start";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export default function ProductSingle() {
  return (
    <div className="group h-full w-full overflow-hidden rounded-lg bg-blue-200 transition duration-200 hover:shadow-lg hover:shadow-blue-100 hover:ring-1 hover:ring-blue-200  dark:hover:shadow-blue-900 dark:hover:ring-red-300">
      <div className=" flex h-full w-full flex-col rounded-lg">
        <div className="relative h-96 overflow-hidden">
          <Image
            src={sampleProductsImg}
            alt="products"
            width={300}
            height={300}
            className="size-full"
          />
          {/* Favorites */}
          <div className="absolute right-4 top-4">
            <Heart className=" size-6 text-blue-500" />
            {/* <HeartFilledIcon className="size-6 text-blue-500" /> */}
          </div>
          {/* Badge */}
          <div className="absolute left-4 top-4">
            <Badge
              variant="outline"
              className=" bg-blue-100 text-blue-800 dark:border-blue-400"
            >
              New
            </Badge>
          </div>
          {/* Add to cart */}
          <div className="absolute bottom-0 hidden w-full cursor-pointer items-center justify-center gap-2 bg-blue-300/30 p-3 text-center text-ring group-hover:flex hover:flex ">
            <ShoppingCart className="size-5 -translate-y-[2px]" />
            <span className="font-kanit text-sm font-medium">Add To Cart</span>
          </div>
        </div>
        <div className="space-y-2 bg-white p-4">
          <span className="font-exo text-lg font-medium text-primary">
            This is a sample
          </span>
          <div className="flex w-full items-center justify-between gap-1 ">
            <p className="flex items-center gap-[2px] font-kanit font-semibold tracking-wide text-primary/80">
              <DollarSign className="size-4" />
              <span className="text-lg">120</span>
            </p>
            <RatingStar rating={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
