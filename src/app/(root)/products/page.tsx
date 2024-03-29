import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Online Shop",
};

export default function About() {
  return (
    <section className="h-screen py-4">
      <h2 className="text-center text-2xl">Products</h2>
    </section>
  );
}
