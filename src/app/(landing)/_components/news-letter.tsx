import { Button, Input } from "@components/ui";
import Container from "@components/utility/Container";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <section className="py-7 md:py-14">
      <Container>
        <div className="grid w-full grid-flow-row place-content-center gap-5 md:grid-flow-col md:grid-cols-2 ">
          {/* Image */}
          <Image
            src="/images/pages/newsletter.svg"
            alt="About Us Image"
            width={450}
            height={450}
            className="order-2 md:order-1 md:row-span-2"
          />
          {/* Title */}
          <div className="order-1 flex flex-col items-start justify-end pl-5 text-primary md:pl-14">
            <p className="text-xl font-medium ">Subscribe to</p>
            <p className="text-4xl font-semibold leading-none">
              our newsletter
            </p>
            <p className="w-full    py-3 text-base font-medium text-primary/70 md:w-9/12">
              Get 20% off on your first order just by subscribing to our
              newsletter
            </p>
          </div>
          {/* Input */}
          <div className="order-3 w-full">
            <div className="mx-auto w-full max-w-md py-3">
              <div className="relative w-full  md:w-4/5 ">
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
