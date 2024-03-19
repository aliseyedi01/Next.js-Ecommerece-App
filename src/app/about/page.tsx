import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Online Shop",
};

export default function About() {
  return (
    <section className="py-4">
      <div className="container mx-auto flex h-full flex-col items-center gap-8 md:h-[85vh] md:flex-row">
        {/* Image Section */}
        <div className=" w-full md:w-1/2">
          <Image
            src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1710851923~exp=1710855523~hmac=3f53ff27e9cffd1d8d6b761106161836308f1aa84761d962a6e8d0feab719da1&w=996"
            alt="About Us Image"
            width={600}
            height={400}
            className="object-cover "
          />
        </div>

        {/* Text Section */}
        <div className="w-full space-y-4 md:w-1/2">
          <h2 className="mb-4 text-center text-3xl font-medium md:text-left">
            About Online Shop
          </h2>
          <p className="text-justify text-lg leading-relaxed">
            Online Shop is your one-stop shop for curated, high-quality products
            that elevate your everyday life. We offer a seamless and enjoyable
            shopping experience across a wide range of categories. Exceptional
            value, trusted suppliers, and top-notch service are at the core of
            everything we do.
          </p>
          <p className="text-justify text-lg leading-relaxed">
            Explore our diverse offerings today and discover how Online Shop can
            enhance your lifestyle!
          </p>
          <Link href="/products">
            <p className="btn btn-primary">Explore Products</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
