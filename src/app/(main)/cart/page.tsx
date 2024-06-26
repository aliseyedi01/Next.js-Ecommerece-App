import type { Metadata } from "next";

import CartPage from "./_components/cart-page";

export const metadata: Metadata = {
  title: "Cart",
};

export default function cart() {
  return <CartPage />;
}
