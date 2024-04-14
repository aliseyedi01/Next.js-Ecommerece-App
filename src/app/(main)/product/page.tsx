import type { Metadata } from "next";

import InformationProduct from "./_components/information-product";
import PreviewProduct from "./_components/preview-product";

export const metadata: Metadata = {
  title: "Product 1 | Online Shop",
};

export default function About() {
  return (
    <section className="h-full w-full">
      <div className="flex h-[calc(100vh-54px)] w-full items-center justify-center   py-7 md:px-3 xl:px-20">
        <div className="flex h-full w-full flex-col md:flex-row">
          <PreviewProduct />
          <InformationProduct />
        </div>
      </div>
    </section>
  );
}
