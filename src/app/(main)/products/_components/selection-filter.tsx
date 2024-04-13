import { X } from "lucide-react";
import React from "react";

let selectionItem = ["red", "xl", "adidas", "men", "boy", "woman"];

export default function SelectionFilters() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-1 ">
      {selectionItem.map((item, index) => (
        <div
          key={index}
          className="group flex w-fit items-center justify-between gap-2 rounded-xl border border-blue-300 px-3 hover:border-blue-600 hover:bg-blue-600  hover:text-white hover:dark:border-blue-500 dark:hover:bg-blue-500 "
        >
          <p className="select-none font-exo text-sm font-normal capitalize dark:text-white md:text-base">
            {item}
          </p>
          <X className="size-4 cursor-pointer rounded-full text-blue-500 group-hover:bg-white group-hover:text-blue-500 dark:text-white hover:dark:bg-blue-700 " />
        </div>
      ))}
      <p className="cursor-pointer rounded-xl border border-red-500 px-2 font-kanit text-sm text-red-600 hover:bg-red-600 hover:text-white md:text-base ">
        Clear All
      </p>
    </div>
  );
}
