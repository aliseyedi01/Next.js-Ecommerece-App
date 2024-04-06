import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Checkbox,
  Label,
} from "@components/ui";
import { Sliders } from "lucide-react";

const categories = [
  { name: "Clothing" },
  { name: "Electronics" },
  { name: "Books" },
  { name: "Home Goods" },
];

export default function SidebarProduct() {
  return (
    <div className="h-full w-3/12 rounded-lg  border border-gray-200 p-4 pb-6 shadow-md dark:border-blue-400">
      <div className="flex w-full items-center justify-between">
        <p className="text-xl font-semibold">Filters</p>
        <Sliders size={18} className="hidden text-gray-500 lg:block" />
      </div>

      <Accordion
        className="w-full"
        type="multiple"
        defaultValue={["categories", "brands"]}
      >
        {/* Categories */}
        <AccordionItem value="categories">
          <AccordionTrigger className="accordion-trigger-product font-mono text-base font-semibold uppercase aria-expanded:bg-transparent">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 flex flex-col gap-1 px-3 ">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md p-1 hover:bg-slate-200 hover:dark:bg-blue-500/20"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox id={item.name} className="rounded-md text-sm" />
                    <Label>{item.name}</Label>
                  </div>
                  <Badge className="  bg-gray-100  text-xs text-gray-800 dark:bg-blue-900 dark:text-blue-300">
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
            <div className="mt-2 flex flex-col gap-1 px-3 ">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md p-1 hover:bg-slate-200"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox id={item.name} className="rounded-md text-sm" />
                    <Label>{item.name}</Label>
                  </div>
                  <Badge className="  bg-gray-100 text-xs text-gray-800">
                    3
                  </Badge>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* Color */}
        <AccordionItem value="colors">
          <AccordionTrigger className="accordion-trigger-product">
            Color
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 flex flex-col gap-1 px-3 ">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md p-1 hover:bg-slate-200"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox id={item.name} className="rounded-md text-sm" />
                    <Label>{item.name}</Label>
                  </div>
                  <Badge className="  bg-gray-100 text-xs text-gray-800">
                    3
                  </Badge>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* Price */}
        <AccordionItem value="price">
          <AccordionTrigger className="accordion-trigger-product">
            Price
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 flex flex-col gap-1 px-3 ">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md p-1 hover:bg-slate-200"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox id={item.name} className="rounded-md text-sm" />
                    <Label>{item.name}</Label>
                  </div>
                  <Badge className="  bg-gray-100 text-xs text-gray-800">
                    3
                  </Badge>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* Size */}
        <AccordionItem value="size">
          <AccordionTrigger className="accordion-trigger-product">
            Size
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 flex flex-col gap-1 px-3 ">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md p-1 hover:bg-slate-200"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox id={item.name} className="rounded-md text-sm" />
                    <Label>{item.name}</Label>
                  </div>
                  <Badge className="  bg-gray-100 text-xs text-gray-800">
                    3
                  </Badge>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
