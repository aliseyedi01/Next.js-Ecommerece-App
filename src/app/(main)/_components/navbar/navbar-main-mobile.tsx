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
    <div className="sticky bottom-3 z-20 mx-auto h-12 w-11/12  md:hidden">
      <nav className="flex h-full items-center justify-between  rounded-2xl bg-blue-500/50 px-4 backdrop-blur-2xl  md:flex">
        {ItemsData.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={cn(
              " flex flex-col items-center justify-center gap-1   transition-all duration-500 ease-in-out",
              pathname === item.link ? "" : "",
            )}
          >
            {React.cloneElement(item.icon as React.ReactElement, {
              className: `size-4 transition duration-200  ${pathname === item.link ? "size-6 rounded-full outline-[3px] outline-blue-700 outline-offset-8 text-blue-700 dark:text-yellow-500  dark:outline-yellow-400  " : ""}`,
            })}

            <p
              className={cn("text-xs ", pathname === item.link ? "hidden" : "")}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
}
