import type { Metadata } from "next";

import FilterProducts from "./_components/filter-products";
import ProductSingle from "./_components/product-single";
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
        <div className="h-full w-full  px-5 md:w-[77%]">
          <SidebarFilterProduct />
          <div className="mt-6 flex w-full items-center justify-between ">
            <p>Item</p>
            <SortProducts />
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
