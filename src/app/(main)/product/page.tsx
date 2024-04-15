import type { Metadata } from "next";

import DescriptionProduct from "./_components/description-product";
import InformationProduct from "./_components/information-product";
import PreviewProduct from "./_components/preview-product";

export const metadata: Metadata = {
  title: "Product 1 | Online Shop",
};

export default function About() {
  return (
    <div className="flex h-full w-full  flex-col items-center justify-center gap-3  py-7  md:px-3 xl:px-20">
      <div className="flex h-full w-full flex-col  gap-3 md:h-[calc(100vh-54px)]  md:flex-row">
        <PreviewProduct />
        <InformationProduct />
      </div>
      <DescriptionProduct />
    </div>
  );
}
