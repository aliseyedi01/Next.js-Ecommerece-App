"use client";

import React from "react";
// style

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  HomeIcon,
  Info,
  LaptopIcon,
  Phone,
  ShoppingBasket,
  UserRound,
} from "lucide-react";
import { cn } from "@lib/utils";

import Image from "next/image";
import { navbarImage } from "@constants/images";

const ItemsData = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Products",
    link: "/products",
    icon: <ShoppingBasket />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Phone />,
  },
  {
    name: "Profile",
    link: "/profile/view",
    icon: <UserRound />,
  },
];

export default function NavbarMainMobile() {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-3 z-40 mx-auto h-12 w-11/12  md:hidden">
      <nav className="relative flex h-full items-center justify-between rounded-2xl bg-blue-500 px-10 md:flex">
        {ItemsData.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={cn(
              " flex flex-col items-center justify-center text-white transition-all duration-200 ease-in-out ",
              pathname === item.link ? "bg-blue-800" : "",
            )}
          >
            {React.cloneElement(item.icon as React.ReactElement, {
              className: `size-4 absolute top-1 z-40 ${pathname === item.link ? "size-7  -translate-y-5" : ""}`,
            })}

            <svg
              className={cn(
                " absolute -top-[30px] bottom-0 z-20 h-16 w-20  rotate-180  fill-background opacity-0",
                pathname === item.link ? "opacity-100" : "",
              )}
              viewBox="0 0 144 62"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
                fill="fill-red-200"
                fill-rule="evenodd"
              />
            </svg>

            <p className="absolute bottom-1 text-sm">{item.name}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}
