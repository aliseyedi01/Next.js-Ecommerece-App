import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="py-7 md:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="rid-rows-2 grid grid-flow-row place-content-center gap-5 md:grid-flow-col md:grid-cols-2 ">
          <Image
            src="/images/pages/newsletter.svg"
            alt="About Us Image"
            width={450}
            height={450}
            className="order-2 md:order-1 md:row-span-2"
          />

          <div className="order-1 flex flex-col items-start justify-end pl-5 text-primary md:pl-14">
            <p className="text-xl font-medium ">Subscribe to</p>
            <p className="text-4xl font-semibold leading-none">
              our newsletter
            </p>
            <p className="w-full py-3   text-base font-medium text-primary/70 md:w-[25rem]">
              Get 20% off on your first order just by subscribing to our
              newsletter
            </p>
          </div>

          <div className="order-3 w-full">
            <div className="mx-auto flex w-full max-w-md flex-wrap justify-center py-3">
              <div className="relative w-full md:w-4/5 ">
                <Input
                  type="email"
                  placeholder="user@gmail.com"
                  className="h-auto w-full rounded-full py-3 pl-12 placeholder:font-medium placeholder:text-blue-800/50"
                />
                <Button
                  className="absolute bottom-0 right-0 h-full rounded-r-full"
                  type="submit"
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-4  text-sm  text-blue-400">
                We promise not to span you !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
