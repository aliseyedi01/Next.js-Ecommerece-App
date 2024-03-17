"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { ShoppingCartIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import QuantitySelector from "./quantity-selector";
import { Separator } from "../ui/separator";
import { CommandSeparator } from "../ui/command";

const image1 =
  "https://img.freepik.com/free-vector/paper-bag-mockup-isolated-vector_53876-61350.jpg?w=740";

const products = [
  {
    image: image1,
    name: "Product 1",
    price: 10.99,
    quantity: 1,
  },
  {
    image: image1,
    name: "Product 2",
    price: 15.5,
    quantity: 2,
  },
  {
    image: image1,
    name: "Product 3",
    price: 7.25,
    quantity: 1,
  },
];

export function CartButton() {
  // Assuming these functions update the cart state in your application
  function removeFromCart(product: any) {
    console.log("Removing product from cart:", product);
  }

  function addToCart(product: any) {
    console.log("Adding product to cart:", product);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCartIcon className="size-4 md:size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Browse through your selected items, review your choices, and proceed
            to checkout when ready.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-3">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col">
              <Separator />
              <div className="mt-3 flex w-full flex-row gap-2">
                <Image
                  src={product.image}
                  alt="Product"
                  width={100}
                  height={100}
                  className="rounded-md"
                  placeholder="empty"
                />
                <div className="flex w-full flex-col justify-between">
                  <div className="flex justify-between">
                    <p className="font-medium">{product.name}</p>
                    <p className="font-medium text-blue-700">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex w-full flex-row items-center justify-between">
                    <QuantitySelector
                      quantity={product.quantity}
                      onDecrement={() => removeFromCart(product)}
                      onIncrement={() => addToCart(product)}
                    />
                    <Button variant="link" className="pb-0 pr-0 text-red-500">
                      <Trash2 className="mr-1 h-4 w-4 " /> Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter>
          <div className="absolute bottom-0 left-0 flex  w-full flex-col p-3">
            <Button className="w-full">Checkout</Button>
            {/* <SheetClose asChild className="mt-3">
              <p className="mx-auto w-fit cursor-pointer text-blue-900 hover:text-blue-600">
                Continue Shopping
              </p>
            </SheetClose> */}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
