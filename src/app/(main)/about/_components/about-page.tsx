"use client";

import BlurringImage from "@components/utility/BluringImage";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <section className="py-4">
      <div className="container mx-auto flex h-full flex-col items-center gap-8 md:h-[calc(100vh-54px)] md:flex-row">
        {/* Image Section */}
        <div className=" w-full md:w-1/2">
          {/* <Image
            src="/images/pages/about.svg"
            alt="About Us Image"
            width={600}
            height={400}
            className="object-cover "
          /> */}
          <BlurringImage
            src="/images/pages/about.svg"
            alt="About Us Image"
            width={600}
            height={400}
            priority={false}
            className="object-contain "
          />
        </div>

        {/* Text Section */}
        <div className="w-full space-y-4 max-md:pb-4 md:w-1/2">
          <h2 className="mb-4 text-center text-3xl font-medium md:text-left">
            About Garb Shop
          </h2>
          <p className="text-justify text-lg leading-relaxed">
            Garb Shop is your one-stop shop for curated, high-quality products
            that elevate your everyday life. We offer a seamless and enjoyable
            shopping experience across a wide range of categories. Exceptional
            value, trusted suppliers, and top-notch service are at the core of
            everything we do.
          </p>
          <p className="text-justify text-lg leading-relaxed">
            Explore our diverse offerings today and discover how Garb Shop can
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
