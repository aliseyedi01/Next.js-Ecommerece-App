"use client";
import QuantitySelector from "@app/(main)/_components/header/QuantitySelector";
import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const image1 =
  "https://img.freepik.com/free-vector/paper-bag-mockup-isolated-vector_53876-61350.jpg?w=740";

const products = [
  {
    image: image1,
    name: "Product 1",
    category: "women",
    price: 10.99,
    quantity: 1,
  },
  {
    image: image1,
    name: "Product 2",
    category: "women",
    price: 15.5,
    quantity: 2,
  },
  {
    image: image1,
    name: "Product 3",
    category: "women",
    price: 7.25,
    quantity: 1,
  },
];

export default function TableCart() {
  function removeFromCart(product: any) {
    console.log("Removing product from cart:", product);
  }

  function addToCart(product: any) {
    console.log("Adding product to cart:", product);
  }
  return (
    <Table>
      <TableCaption>A list of your shopping cart.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px] ">Item</TableHead>
          <TableHead className="">Quantity</TableHead>
          <TableHead className="">Price</TableHead>
          <TableHead className=" text-right">Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow
            key={product.name}
            className="h-28 font-kanit text-black dark:hover:bg-gray-200"
          >
            <TableCell className=" font-medium">
              <div className="flex items-center gap-4">
                <Image
                  src={product.image}
                  alt="Product"
                  width={100}
                  height={100}
                  className="size-14 rounded-md md:size-20"
                  placeholder="empty"
                />
                <div className="md: flex flex-col  space-y-1 space-y-2">
                  <p>{product.name}</p>
                  <p className="opacity-65">{product.category}</p>
                  <Button
                    variant="ghost"
                    className="h-auto w-auto bg-transparent p-0 text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="mr-2 w-3  md:w-4" />
                    <p className="text-xs md:text-base">Remove</p>
                  </Button>
                </div>
              </div>
            </TableCell>
            <TableCell className="">
              <QuantitySelector
                quantity={product.quantity}
                onDecrement={() => removeFromCart(product)}
                onIncrement={() => addToCart(product)}
              />
            </TableCell>
            <TableCell className="">${product.price}</TableCell>
            <TableCell className=" text-right  font-medium">$250.00</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
