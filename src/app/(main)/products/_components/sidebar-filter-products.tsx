"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  Button,
  SheetClose,
} from "@components/ui";
import { Filter } from "lucide-react";
import FilterProducts from "./filter-products";

export default function SidebarFilterProduct() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="focus:ring-none flex w-full gap-3 border-none outline-none focus-within:outline-none focus-visible:outline-none  md:hidden"
        >
          <Filter className="size-5" />
          <p className=" text-lg">Filter Products</p>
        </Button>
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
