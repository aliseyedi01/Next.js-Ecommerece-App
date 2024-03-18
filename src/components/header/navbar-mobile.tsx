"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelLeft, Trash2, Home, Store, PhoneCall, Info } from "lucide-react";
import Link from "next/link";

const ItemsData = [
  {
    name: "Home",
    link: "/home",
    icon: <Home />,
  },
  {
    name: "Products",
    link: "/products",
    icon: <Store />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info />,
  },
  {
    name: "Contact Us",
    link: "/contact",
    icon: <PhoneCall />,
  },
];

export function NavbarButton() {
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
          {ItemsData.map((item, index) => (
            <li key={index} className="flex  gap-2">
              <Link href={item.link || "#"} className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
