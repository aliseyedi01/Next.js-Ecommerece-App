"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

interface QuantityProps {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export default function QuantitySelector({
  quantity,
  onDecrement,
  onIncrement,
}: QuantityProps) {
  console.log(onDecrement);
  return (
    <div className="flex w-min flex-row gap-1 rounded-lg border p-1">
      <Button
        className="h-5 w-5"
        variant="ghost"
        size="icon"
        onClick={onDecrement}
        disabled={quantity <= 1} // Disable minus button if quantity is 1
      >
        <MinusIcon size={15} />
      </Button>
      <span className="min-w-5 px-1 text-center text-sm">{quantity}</span>
      <Button
        className="h-5 w-5"
        variant="ghost"
        size="icon"
        onClick={onIncrement}
      >
        <PlusIcon size={15} />
      </Button>
    </div>
  );
}
