"use client";
import { Separator } from "@components/ui";
import BlurringImage from "@components/utility/BluringImage";
import { shopIcon } from "@constants/images";
import Image from "next/image";
import React from "react";

export default function NavbarProfile() {
  return (
    <div className="h-full w-[18%] flex-col bg-background  px-2 py-5 bg-blend-darken brightness-[0.85]">
      <div className="flex -translate-x-2 items-center justify-center gap-3">
        <BlurringImage
          src={shopIcon}
          alt="About Us Image"
          width={100}
          height={100}
          className="size-8"
        />
        <h2 className="text-xl tracking-wide text-primary">Online Shop</h2>
      </div>
    </div>
  );
}
