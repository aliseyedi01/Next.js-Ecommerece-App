import {
  ColorPickerGroup,
  ColorPickerGroupItem,
} from "@app/(main)/products/_components/colors-picker";
import RatingStar from "@app/(main)/products/_components/rating-start";
import { Button, Label, RadioGroup, RadioGroupItem } from "@components/ui";
import { adidasBrand } from "@constants/images";
import { colors, SizeProducts } from "@data/filter-products-data";
import { DollarSign, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function InformationProduct() {
  return (
    <div className="title-info-product flex h-full w-full flex-col items-start gap-4 px-5 py-1 md:w-1/2 md:gap-7 md:p-5 ">
      {/* Title & Category */}
      <div className="flex items-end gap-2">
        <h2 className="font-ubuntu text-2xl  font-bold tracking-widest text-blue-900 md:text-3xl">
          Cool T-Shirt
        </h2>
        <p className="pl-1 font-exo font-semibold uppercase text-blue-600">
          Women
        </p>
      </div>
      {/* Price  */}
      <div className="flex items-center gap-2 md:flex-col md:items-start">
        <h4>Price</h4>
        <div className="flex items-end gap-2 pl-2 font-ubuntu text-lg">
          <p className="flex items-center text-sm md:text-2xl">
            <DollarSign className="size-3 md:size-4" /> 35.39
          </p>
          <p className="flex -translate-y-1 items-center text-sm text-gray-500  line-through md:text-sm">
            <DollarSign className="size-3 md:size-4" /> 35.39
          </p>
        </div>
      </div>
      {/* Rate */}
      <div className="flex items-center gap-4  md:flex-col md:items-start">
        <h4>Rate</h4>
        <RatingStar rating={3} count={23} />
      </div>
      {/* Brands */}
      <div className="flex items-center gap-2 md:flex-col">
        <h4>Brand</h4>
        <Image
          src={adidasBrand}
          height={50}
          width={50}
          className="size-9 md:size-12"
          alt="brands"
        />
      </div>
      {/* Color */}
      <div className="flex flex-col gap-1">
        <h4>Color</h4>
        <ColorPickerGroup className="flex flex-wrap items-center gap-2 p-1">
          {colors.map((color, index) => (
            <ColorPickerGroupItem
              key={index}
              label={color.label}
              value={color.value}
              color={color.value}
            />
          ))}
        </ColorPickerGroup>
      </div>
      {/* Size */}
      <div className="flex flex-col gap-1">
        <h4>Size</h4>
        <RadioGroup className=" flex size-full items-center gap-1 p-1">
          {SizeProducts.map((item, index) => (
            <Label
              className="border-blue flex size-full w-10 flex-col items-center justify-center gap-1 rounded-md border border-blue-700 px-2 py-2 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-500/50 [&:has([data-state=checked])]:bg-blue-500  [&:has([data-state=checked])]:text-white dark:[&:has([data-state=checked])]:bg-blue-600  dark:[&:has([data-state=checked])]:text-white"
              key={index}
            >
              <RadioGroupItem value={item.value} className="sr-only" />
              <p className="font-mono font-semibold uppercase  ">
                {item.value}
              </p>
            </Label>
          ))}
        </RadioGroup>
      </div>
      {/* Action */}
      <div className="flex items-center gap-4 ">
        <Button className="rounded-full">Add To Card</Button>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full text-blue-500"
        >
          <Heart />
        </Button>
      </div>
    </div>
  );
}
