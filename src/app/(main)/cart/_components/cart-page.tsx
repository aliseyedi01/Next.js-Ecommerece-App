import { Button, Separator } from "@components/ui";
import Container from "@components/utility/container";
import React from "react";

import TableCart from "./table-cart";

export default function CartPage() {
  return (
    <Container>
      <div className="flex h-full w-full items-center justify-center  max-md:py-8 md:h-[calc(100vh-54px)]">
        <div className="grid h-full w-full grid-cols-1 overflow-hidden  rounded-xl border border-blue-500 md:h-[90%] md:grid-cols-6  ">
          {/* Title & Table */}
          <div className="bg-white md:col-span-4">
            <div className="flex w-full flex-col gap-8 p-6 md:p-8">
              {/* Title */}
              <div className="flex items-center justify-between border-b-2 border-gray-300 pb-2 text-black">
                <p className="text-center font-exo text-2xl font-semibold">
                  Your Cart
                </p>
                <p className="text-center font-exo text-xl font-semibold">
                  3 Items
                </p>
              </div>
              {/* Table Cart */}
              <TableCart />
            </div>
          </div>
          {/* Checkout */}
          <div className="bg-gray-300 text-black md:col-span-2">
            <div className="flex h-full w-full flex-col  items-center justify-between  p-5">
              <div className="flex w-full  flex-col gap-6">
                {/* Title */}
                <div className="flex w-full flex-col gap-2 pt-3">
                  <p className="text-center font-exo text-2xl font-semibold">
                    Order Summary
                  </p>
                  <Separator className="bg-gray-400" />
                </div>
                {/* Body */}
                <div className="flex w-full flex-col gap-3">
                  {/* Total Price */}
                  <div className="flex items-center justify-between">
                    <p className="font-exo font-semibold tracking-wide opacity-80">
                      Total Price
                    </p>
                    <p className="font-kanit text-lg">$350.00</p>
                  </div>
                  {/* Tax */}
                  <div className="flex items-center justify-between">
                    <p className="font-exo font-semibold tracking-wide  opacity-80">
                      Tax
                    </p>
                    <p className="text-lgl font-kanit">$12.00</p>
                  </div>
                  {/* Shipping */}
                  <div className="flex items-center justify-between">
                    <p className="font-exo font-semibold tracking-wide  opacity-80">
                      Shipping
                    </p>
                    <p className="font-kanit text-lg">$82.00</p>
                  </div>
                </div>
              </div>
              {/* Final */}
              <div className="flex  w-full flex-col gap-4 max-md:pt-3">
                <Separator className="bg-gray-400" />
                <div className="flex w-full items-center justify-between px-1 font-kanit text-xl font-medium">
                  <p className="tracking-wider">Final Price</p>
                  <p>$182.00</p>
                </div>
                <Button className="w-full">Checkout Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
