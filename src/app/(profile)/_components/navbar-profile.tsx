"use client";
import { Avatar, AvatarFallback, AvatarImage, Separator } from "@components/ui";
import BlurringImage from "@components/utility/BluringImage";
import { boyProf, girlProf, shopIcon } from "@constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavbarProfile() {
  return (
    // <div className="h-full w-[18%] flex-col space-y-8 bg-navbar px-4 py-5">
    <div className="h-full w-[18%] flex-col space-y-8  px-4 py-5">
      <div className="flex -translate-x-2 items-center justify-center gap-3">
        <Image
          src={shopIcon}
          alt="About Us Image"
          width={100}
          height={100}
          className="size-8"
        />
        <Link href="/">
          <h2 className="text-xl tracking-wide text-primary">Online Shop</h2>
        </Link>
      </div>

      <div>
        <Link
          href="/profile"
          className="flex items-center justify-start gap-5 rounded-md p-1 hover:bg-blue-100"
        >
          <Avatar>
            <AvatarImage src={boyProf.src} />
            {/* <AvatarImage src="/images/profile/prof-girl-1.jpg" /> */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base font-medium">Hello</p>
            <p className="text-lg tracking-wider">Ali Seyedi</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
