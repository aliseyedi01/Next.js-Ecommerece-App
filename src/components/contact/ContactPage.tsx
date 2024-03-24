"use client";

import React from "react";
import { ContactForm, SocialMedia } from "@components/contact";
import { useState } from "react";
import BlurringImage from "@components/utility/BluringImage";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="flex h-full items-start justify-center  md:h-screen ">
      <div className="grid h-full w-full grid-cols-1 p-3 max-md:gap-5 md:w-[85%] md:grid-cols-2">
        <div className="flex flex-col items-center justify-start pt-16 md:pt-8">
          <h2 className="text-3xl font-medium text-blue-600 md:text-left">
            Get In Touch
          </h2>
          <p className="py-4 text-blue-900 md:text-left">
            We are here for you! How can we help?
          </p>
          <ContactForm />
        </div>

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
  );
}
