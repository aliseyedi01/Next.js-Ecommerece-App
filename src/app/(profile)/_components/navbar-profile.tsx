"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui";
import { boyProf, shopIcon } from "@constants/images";
import {
  Bell,
  Heart,
  LogOut,
  Paintbrush,
  ShoppingBasket,
  UserRound,
  UserRoundCog,
  UserRoundMinus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navListProfile = [
  {
    title: "account",
    items: [
      { name: "profile", icon: <UserRound /> },
      { name: "edit profile", icon: <UserRoundCog /> },
    ],
  },
  {
    title: "Order",
    items: [
      { name: "My Order", icon: <ShoppingBasket /> },
      { name: "Favorites", icon: <Heart /> },
    ],
  },
  {
    title: "settings",
    items: [
      { name: "Appearance", icon: <Paintbrush /> },
      { name: "Notifications", icon: <Bell /> },
    ],
  },
  {
    title: "actions",
    items: [
      { name: "delete account", icon: <UserRoundMinus /> },
      { name: "log out", icon: <LogOut /> },
    ],
  },
];

export default function NavbarProfile() {
  return (
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
            <p className="text-base font-medium">Hello 🤚</p>
            <p className="text-lg tracking-wider">Ali Seyedi</p>
          </div>
        </Link>
      </div>

      <div>
        {navListProfile.map((nav, index) => (
          <div key={index} className="flex flex-col space-x-2 pb-4">
            <span className="pointer-events-none font-mono text-sm uppercase leading-5 text-foreground/70">
              {nav.title}
            </span>
            {nav.items && (
              <ul className="space-y-1 pt-2">
                {nav.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex cursor-pointer   items-center gap-3  rounded-md p-1 hover:bg-blue-200"
                  >
                    {/* {item.icon} */}
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className:
                        "size-6 fill-slate-400 stroke-1  stroke-slate-500 ",
                    })}
                    <p className="capitalize">{item.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
