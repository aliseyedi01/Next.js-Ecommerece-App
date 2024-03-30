"use client";

import React from "react";
import OTPForm from "./OTPForm";
import BlurringImage from "@components/utility/BluringImage";

export default function OTPPage() {
  return (
    <div className="flex -translate-y-16 flex-col-reverse items-center justify-center gap-6 md:flex-row">
      <OTPForm />
      <BlurringImage
        src="/images/pages/otp.svg"
        alt="About Us Image"
        width={500}
        height={500}
        className="size-[15rem] md:size-[30rem] "
      />
    </div>
  );
}
