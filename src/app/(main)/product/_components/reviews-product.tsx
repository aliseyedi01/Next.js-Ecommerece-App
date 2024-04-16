import RatingStar from "@app/(main)/products/_components/rating-start";
import { ScrollArea } from "@components/ui";
import { avatar2 } from "@constants/images";
import Image from "next/image";
import React from "react";

import AddReviewProduct from "./add-review-product";

export default function ReviewsProduct() {
  return (
    <div className="grid h-full w-full  grid-cols-1 gap-5  p-1 md:h-full md:grid-cols-2  md:p-4">
      {/* All Reviews */}
      <ScrollArea className="flex h-96 flex-col items-center justify-center overflow-y-scroll pr-3 scrollbar-none md:h-full  md:pr-4">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className="mb-5 flex min-h-24 w-full flex-col overflow-hidden rounded-md border border-blue-600 bg-blue-300  p-1 dark:border-blue-400 dark:bg-indigo-700 md:p-2 "
          >
            <div className="flex h-full w-full flex-row items-center justify-between space-x-2  p-1">
              <div className="flex items-center gap-2">
                <Image
                  src={avatar2}
                  alt="About Us Image"
                  width={50}
                  height={50}
                  className="size-9 rounded-full"
                />
                <p className="justify-self-end  font-exo">David John</p>
                <p className="justify-self-end font-kanit text-sm">
                  2 age last
                </p>
              </div>
              <RatingStar
                rating={2}
                className="text-blue-700 dark:text-blue-400"
              />
            </div>
            <div className="min-h-14 w-full  p-2 font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              recusandae unde? Doloribus minima harum sed sapiente reiciendis
              cupiditate impedit similique
            </div>
          </div>
        ))}
      </ScrollArea>
      {/* New Reviews */}
      {/* <div className="h-full w-full bg-red-400">a</div> */}
      <AddReviewProduct />
    </div>
  );
}
