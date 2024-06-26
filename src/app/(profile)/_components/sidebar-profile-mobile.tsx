"use client";

import { LogoutForm } from "@app/(main)/_components/header/logout-form";
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@components/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui";
import { avatar1 } from "@constants/images";
import { NavbarProfileData } from "@data/navbar-profile-data";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function SidebarProfileMobile() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="focus:ring-none flex flex-col gap-1 border-none bg-transparent outline-none focus-within:outline-none hover:bg-transparent focus-visible:outline-none"
        >
          <Menu className="size-4" />
          <p className="font-mono text-xs">Menu</p>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="">
        {/* Review Account */}
        <div className="pointer-events-none mb-4 mt-8 flex items-center justify-start gap-5 rounded-md p-1">
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

        {NavbarProfileData.map((nav, index) => (
          <div key={index} className="mt-4 flex flex-col space-x-2">
            <span className="pointer-events-none font-mono text-sm uppercase leading-5 text-foreground/70">
              {nav.title}
            </span>
            {nav.items && (
              <ul className="space-y-1 pt-2">
                {nav.items.map((item) => (
                  <li key={index}>
                    <SheetClose asChild>
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
                    </SheetClose>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <LogoutForm place="navbar" />
      </SheetContent>
    </Sheet>
  );
}
