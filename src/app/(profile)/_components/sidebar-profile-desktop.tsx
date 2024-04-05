"use client";
import { LogoutForm } from "@components/header/logout-form";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui";
import { avatar1, shopIcon } from "@constants/images";
import { NavbarProfileData } from "@data/navbar-profile-data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarProfileDesktop() {
  const pathname = usePathname();
  return (
    <div className="hidden h-full w-[18%] flex-col space-y-8 px-4  py-5 md:flex">
      {/* Logo Shop */}
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

      {/* Review Account */}
      <div className="pointer-events-none flex items-center justify-start gap-5 rounded-md p-1">
        <Avatar>
          <AvatarImage src={avatar1.src} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs font-medium tracking-widest text-slate-400">
            Hello
          </p>
          <p className="text-lg tracking-wider">Ali Seyedi</p>
        </div>
      </div>

      {/* Navbar List */}
      <div>
        {NavbarProfileData.map((nav, index) => (
          <div key={index} className="flex flex-col space-x-2">
            <span className="pointer-events-none font-mono text-sm uppercase leading-5 text-foreground/70">
              {nav.title}
            </span>
            {nav.items && (
              <ul className="space-y-1 pt-2">
                {nav.items.map((item) => (
                  <Link
                    href={item.link as string}
                    key={item.name}
                    className={`flex cursor-pointer items-center gap-3 rounded-md p-1 hover:bg-muted-foreground/20 ${
                      pathname === item.link ? "bg-muted-foreground/40" : ""
                    }`}
                  >
                    {/* {item.icon} */}
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className:
                        "size-6 fill-slate-400 stroke-1  stroke-slate-500 ",
                    })}
                    <p className="capitalize">{item.name}</p>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}
        <LogoutForm place="navbar" />
      </div>
    </div>
  );
}
