"use client";

import { cn } from "@lib/utils";
import { Bell, Heart, HomeIcon, ShoppingBasket, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SidebarProfileMobile } from "./sidebar-profile-mobile";

const ItemsData = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "My Order",
    link: "/products",
    icon: <ShoppingBasket />,
  },
  {
    name: "Notification",
    link: "/setting/notifications",
    icon: <Bell />,
  },
  {
    name: "Favorites",
    link: "/favorites",
    icon: <Heart />,
  },
  {
    name: "Profile",
    link: "/profile/view",
    icon: <UserRound />,
  },
];

export default function NavbarProfileMobile() {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-3 z-20 mx-auto h-12 w-11/12  md:hidden">
      <nav className="flex h-full items-center justify-between  rounded-2xl bg-blue-500/50 px-4 backdrop-blur-2xl  md:flex">
        <SidebarProfileMobile />
        {ItemsData.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={cn(
              " flex flex-col items-center justify-center gap-1 transition-transform duration-1000 ease-in-out",
              pathname === item.link ? "" : "",
            )}
          >
            {React.cloneElement(item.icon as React.ReactElement, {
              className: `size-4 transition duration-200 text-blue-900 dark:text-blue-400  ${pathname === item.link ? "size-6 rounded-full outline-[2px] outline-dotted  outline-[#0644f4]    outline-offset-[6px]  text-[#0644f4] dark:text-blue-100  dark:outline-blue-100  " : ""}`,
            })}

            <p
              className={cn(
                "text-xs text-blue-900 dark:text-blue-400",
                pathname === item.link ? "hidden" : "",
              )}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
}
