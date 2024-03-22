import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="rid-rows-2 grid grid-flow-row md:grid-flow-col md:grid-cols-2 md:gap-5">
          <Image
            src="/images/pages/newsletter.svg"
            alt="About Us Image"
            width={450}
            height={450}
            className="order-2 object-cover md:order-1 md:row-span-2"
          />

          <div className="order-1 flex flex-col items-start justify-end pl-14">
            <p className="text-xl font-medium ">Subscribe to</p>
            <p className="text-4xl font-semibold leading-none">
              our newsletter
            </p>
            <p className="w-[25rem] py-3 text-base font-medium text-gray-500">
              Get 20% off on your first order just by subscribing to our
              newsletter
            </p>
          </div>

          <div className="order-3 w-full">
            <div className="mx-auto flex w-full max-w-md flex-wrap justify-center py-3">
              <div className="relative w-4/5 ">
                <Input
                  type="email"
                  placeholder="user@gmail.com"
                  className=" h-auto w-full rounded-full py-3 pl-12 placeholder:font-medium placeholder:text-slate-400"
                />
                <Button
                  className="absolute bottom-0 right-0 h-full rounded-r-full"
                  type="submit"
                >
                  Subscribe
                </Button>
              </div>
              {/* <p className="mt-4  text-sm  text-gray-500">
                We promise not to span you !
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
