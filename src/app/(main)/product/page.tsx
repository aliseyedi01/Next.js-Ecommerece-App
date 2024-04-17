import type { Metadata } from "next";

import BreadcrumbProduct from "./_components/breadcrumb-product";
import DescriptionProduct from "./_components/description-product";
import InformationProduct from "./_components/information-product";
import PreviewProduct from "./_components/preview-product";
import RelativeProduct from "./_components/relative-product";

export const metadata: Metadata = {
  title: "Product 1",
};

export default function About() {
  return (
    <div className="flex h-full w-full flex-col  items-center justify-center gap-7  pb-7  md:px-3 xl:px-20">
      <div className="flex h-full w-full flex-col  md:h-[calc(100vh-54px)]">
        <BreadcrumbProduct />
        <div className="flex h-full w-full flex-col md:flex-row">
          <PreviewProduct />
          <InformationProduct />
        </div>
      </div>
      <DescriptionProduct />
      <RelativeProduct />
    </div>
  );
}
