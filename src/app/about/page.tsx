import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Online Shop",
};

export default function About() {
  return (
    <section className="py-4">
      <div className="container mx-auto flex flex-col items-center gap-8 md:flex-row">
        {/* Image Section */}
        <div className=" w-full md:w-1/2">
          <Image
            src="https://img.freepik.com/free-vector/green-hand-drawn-brainstorming-with-doodle-art-design_53876-120515.jpg?t=st=1710782172~exp=1710785772~hmac=ed61d398a5df46758337eb4cf02b14ae1fcccc1c9cf00d044f89bc9bf799519c&w=740"
            alt="About Us Image"
            width={600}
            height={400}
            className="rounded-lg object-cover shadow-md "
          />
        </div>

        {/* Text Section */}
        <div className="w-full space-y-4 md:w-1/2">
          <h2 className="mb-4 text-center text-3xl font-medium md:text-left">
            About Online Shop
          </h2>
          <p className="text-lg leading-relaxed">
            Online Shop is your one-stop shop for curated, high-quality products
            that elevate your everyday life. We offer a seamless and enjoyable
            shopping experience across a wide range of categories. Exceptional
            value, trusted suppliers, and top-notch service are at the core of
            everything we do.
          </p>
          <p className="text-lg leading-relaxed">
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
