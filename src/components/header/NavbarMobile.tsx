"use client";

import { Button } from "@components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import { NavbarData } from "@data/navbar-data";
import { PanelLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarButton() {
  const pathname = usePathname();

  function removeFromCart(product: any) {
    console.log("Removing product from cart:", product);
  }

  function addToCart(product: any) {
    console.log("Adding product to cart:", product);
  }

  return (
    <Sheet>
      <SheetTrigger asChild className="inline-flex md:hidden">
        <Button variant="ghost" size="icon">
          <PanelLeft className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="text-left">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className="mt-3 list-none space-y-3">
          {NavbarData.map((item, index) => (
            <li key={index} className="flex  gap-2">
              <SheetClose asChild>
                <Link
                  href={item.link || "#"}
                  className={`flex items-center gap-2 ${
                    pathname === item.link ? "text-blue-600" : ""
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
