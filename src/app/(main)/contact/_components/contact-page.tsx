"use client";

import BlurringImage from "@components/utility/BluringImage";
import Container from "@components/utility/container";
import React from "react";
import { useState } from "react";

import ContactForm from "./contact-form";
import SocialMedia from "./social-media";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <section className="flex h-full items-center justify-center md:h-[calc(100vh-54px)] ">
        <div className="grid h-full w-full grid-cols-1 place-items-center  p-3 max-md:gap-5  md:grid-cols-2">
          {/* Title & Form */}
          <div className="flex w-full flex-col items-center justify-start pt-16 md:pt-8">
            <h2 className="text-3xl font-medium text-blue-600">Get In Touch</h2>
            <p className="py-4 text-blue-900 ">
              We are here for you! How can we help?
            </p>
            <ContactForm />
          </div>
          {/* Image & SocialMedia */}
          <div className="flex flex-col items-center justify-start  gap-8 max-md:py-9">
            <BlurringImage
              src="/images/pages/contact.svg"
              alt="About Us Image"
              width={500}
              height={500}
              className="size-[29rem] rounded-lg"
            />
            <SocialMedia />
          </div>
        </div>
      </section>
    </Container>
  );
}
