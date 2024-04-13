"use client";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui";
import { Filter } from "lucide-react";
import React from "react";

import FilterProducts from "./filter-products";

export default function SidebarFilterProduct() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="focus:ring-none flex w-full  cursor-pointer flex-row justify-center gap-2 border-none  outline-none focus-within:outline-none  focus-visible:outline-none md:hidden">
          <Filter className="size-4" />
          <p className=" text-sm">Filter Products</p>
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="h-full w-10/12 overflow-y-scroll py-12 scrollbar-none"
      >
        <FilterProducts />
      </SheetContent>
    </Sheet>
  );
}
