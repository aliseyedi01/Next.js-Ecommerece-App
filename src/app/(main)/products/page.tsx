import type { Metadata } from "next";
import SidebarProduct from "./_components/sidebar-products";

export const metadata: Metadata = {
  title: "Products | Online Shop",
};

export default function About() {
  return (
    <section className="mx-20 flex h-full py-4">
      <SidebarProduct />
      <div className="h-[1000px] w-full p-5 ">Main</div>
    </section>
  );
}
