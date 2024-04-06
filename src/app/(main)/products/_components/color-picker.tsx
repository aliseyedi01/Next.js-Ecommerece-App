"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui";

type ColorPickerGroupProps = {
  color: string;
  label?: string;
};

const ColorPickerGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
ColorPickerGroup.displayName = RadioGroupPrimitive.Root.displayName;

const ColorPickerGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    ColorPickerGroupProps
>(({ className, ...props }, ref) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
              "aspect-square h-8 w-8 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            style={{
              backgroundColor: props.color,
            }}
            {...props}
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <Check
                className="h-4 w-4 fill-current text-white"
                style={{
                  fill: props.color,
                }}
              />
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
ColorPickerGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { ColorPickerGroup, ColorPickerGroupItem };
