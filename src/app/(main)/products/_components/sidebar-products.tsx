"use client";

import React, { useState } from "react";
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
import { ChevronDown, ChevronUp, Sliders } from "lucide-react";
import { ColorPickerGroup, ColorPickerGroupItem } from "./colors-picker";
import {
  BrandsFilterData,
  SizeProducts,
  categories,
  colors,
} from "@data/filter-products-data";
import Image from "next/image";

export default function SidebarProduct() {
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandChange = (brand: any) => setSelectedBrand(brand);

  return (
    <div className="h-full w-3/12 rounded-lg border border-gray-200 p-4 pb-6 shadow-md dark:border-blue-400">
      <div className="flex w-full items-center justify-between">
        <p className="text-xl font-semibold">Filters</p>
        <Sliders size={18} className="hidden text-gray-500 lg:block" />
      </div>

      <Accordion
        className="w-full"
        type="multiple"
        defaultValue={["categories", "colors", "brands", "price", "size"]}
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
                  className="border-blue flex size-full flex-col items-center justify-center gap-1 rounded-md border border-blue-700 px-2 py-2 hover:bg-blue-100 dark:hover:bg-blue-500/50 [&:has([data-state=checked])]:bg-blue-500 dark:[&:has([data-state=checked])]:bg-blue-600"
                  key={index}
                >
                  <RadioGroupItem value={item.value} className="sr-only" />
                  <p className="font-mono font-semibold uppercase text-blue-950 dark:text-blue-300">
                    {item.value}
                  </p>
                </Label>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
