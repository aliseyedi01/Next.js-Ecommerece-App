"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Slider,
} from "@components/ui";
import {
  BrandsFilterData,
  categories,
  colors,
  RatingFilterData,
  SizeProducts,
} from "@data/filter-products-data";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { ChevronDown, ChevronUp, Sliders, StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { ColorPickerGroup, ColorPickerGroupItem } from "./colors-picker";

export default function FilterProducts() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const handleBrandChange = (brand: any) => setSelectedBrand(brand);

  const [selectedRating, setSelectedRating] = useState("5");

  const handleRatingChange = (event: any) => {
    setSelectedRating(event.target.value);
  };

  return (
    <div className="h-fit w-full rounded-lg border border-gray-200 p-4 pb-6 shadow-md dark:border-blue-400">
      <div className="flex w-full  items-center justify-between">
        <p className="text-xl font-semibold">Filters</p>
        <Sliders size={18} className="hidden text-gray-500 lg:block" />
      </div>

      <Accordion
        className="h-full w-full"
        type="multiple"
        defaultValue={[
          "categories",
          "colors",
          "brands",
          "price",
          "size",
          "rating",
        ]}
      >
        {/* Categories */}
        <AccordionItem value="categories">
          <AccordionTrigger className="accordion-trigger-product">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 flex flex-col gap-1 px-3 ">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md p-1 hover:bg-blue-200/50 hover:dark:bg-blue-500/20"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox id={item.name} className="rounded-md text-sm" />
                    <Label>{item.name}</Label>
                  </div>
                  <Badge className="bg-blue-200 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    3
                  </Badge>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Brands */}
        <AccordionItem value="brands">
          <AccordionTrigger className="accordion-trigger-product">
            Brands
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup className="grid size-full grid-cols-3 place-items-center gap-1 p-1">
              {BrandsFilterData.map((item, index) => (
                <Label
                  className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 hover:bg-blue-100 [&:has([data-state=checked])]:bg-blue-200/50"
                  key={index}
                >
                  <RadioGroupItem value={item.src.src} className="sr-only" />
                  <Image
                    src={item.src}
                    alt={item.label}
                    height={100}
                    width={100}
                    className="size-12 object-contain"
                  />
                  <p className="font-mono text-xs text-foreground">
                    {item.label}
                  </p>
                </Label>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        {/* Color */}
        <AccordionItem value="colors">
          <AccordionTrigger className="accordion-trigger-product">
            Color
          </AccordionTrigger>
          <AccordionContent>
            <div className="">
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
          </AccordionContent>
        </AccordionItem>

        {/* Price */}
        <AccordionItem value="price">
          <AccordionTrigger className="accordion-trigger-product">
            Price
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="flex  h-full flex-col gap-3  p-2">
              <div className="flex h-full items-center justify-between gap-1 ">
                <Input placeholder="Min" type="number" icon={<ChevronDown />} />
                <span className="text-gray-600">-</span>
                <Input placeholder="Max" type="number" icon={<ChevronUp />} />
              </div>
              <div className="h-full  py-3">
                <Slider
                  defaultValue={[60, 200]}
                  max={300}
                  step={1}
                  unit="$"
                  className="h-full "
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Size */}
        <AccordionItem value="size">
          <AccordionTrigger className="accordion-trigger-product">
            Size
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup className="grid size-full grid-cols-3 place-items-center gap-1 p-1">
              {SizeProducts.map((item, index) => (
                <Label
                  className="border-blue flex size-full flex-col items-center justify-center gap-1 rounded-md border border-blue-700 px-2 py-2 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-500/50 [&:has([data-state=checked])]:bg-blue-500  [&:has([data-state=checked])]:text-white dark:[&:has([data-state=checked])]:bg-blue-600  dark:[&:has([data-state=checked])]:text-white"
                  key={index}
                >
                  <RadioGroupItem value={item.value} className="sr-only" />
                  <p className="font-mono font-semibold uppercase  ">
                    {item.value}
                  </p>
                </Label>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        {/* Rating */}
        <AccordionItem value="rating">
          <AccordionTrigger className="accordion-trigger-product">
            Rating
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              defaultValue={selectedRating}
              onChange={handleRatingChange}
              className=""
            >
              {RatingFilterData.map((rating) => (
                <div key={rating.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={rating.value}
                    id={`r${rating.value}`}
                  />
                  <Label htmlFor={`r${rating.value}`}>
                    <div className="flex w-full flex-row items-center justify-between text-yellow-500">
                      {[...Array(rating.filledStars)].map((_, index) => (
                        <StarFilledIcon key={index} className="size-5" />
                      ))}
                      {[...Array(rating.emptyStars)].map((_, index) => (
                        <StarIcon key={index} className="size-5" />
                      ))}
                    </div>
                  </Label>
                  <p className="text-xs text-yellow-900 dark:text-yellow-400">
                    ({rating.value})
                  </p>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
