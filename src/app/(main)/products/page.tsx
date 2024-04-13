import { Separator } from "@components/ui";
import type { Metadata } from "next";

import FilterProducts from "./_components/filter-products";
import ProductSingle from "./_components/product-single";
import SearchProducts from "./_components/search-products";
import SidebarFilterProduct from "./_components/sidebar-filter-products";
import SortProducts from "./_components/sort-products";

export const metadata: Metadata = {
  title: "Products | Online Shop",
};

export default function About() {
  return (
    <section className="h-full w-full">
      <div className="flex h-full w-full py-7 md:px-3 xl:px-20">
        <div className="hidden h-full w-[23%] md:block">
          <FilterProducts />
        </div>
        <div className="h-full w-full px-5 md:w-[77%]">
          <div className="mt-6 flex w-full flex-col items-center justify-between gap-3 text-blue-800  md:flex-row ">
            <SearchProducts />

            <div className="flex h-10 w-full items-center justify-center  gap-4 rounded-xl border border-blue-500/30 bg-blue-100 p-1  dark:border-blue-400  md:w-fit md:border-none">
              <SidebarFilterProduct />
              <Separator
                orientation="vertical"
                className="h-7 w-[1px] rounded-full bg-gray-400 md:hidden"
              />
              <SortProducts />
            </div>
          </div>
          <div className="grid h-full w-full grid-cols-1 place-items-center gap-5 py-5 min-[450px]:grid-cols-2  lg:grid-cols-3">
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
            <ProductSingle />
          </div>
        </div>
      </div>
    </section>
  );
}
