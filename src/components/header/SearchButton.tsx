"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const products = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
  { id: 4, title: "Product 4" },
  { id: 5, title: "Product 5" },
];

const SearchButton = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <div className="md:mr-8">
      <Button
        variant="ghost"
        className={cn(
          "flex h-9 w-full flex-row justify-between border  text-sm font-normal text-muted-foreground  shadow-none backdrop-blur-sm md:w-64 md:border",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <div className="flex w-full">
          <Search className="size-5 " />
          <span className="ml-2 hidden lg:inline-flex">Search Products...</span>
          <span className="inline-flex pl-2 lg:hidden">Search...</span>
        </div>
        <kbd className="hidden select-none items-center gap-1 rounded border bg-muted  px-1.5 font-mono text-[10px] font-medium text-blue-600  sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search Products ..."
          className="font-ubuntu"
        />
        <CommandList>
          <CommandEmpty className="font-ubuntu">No results found.</CommandEmpty>
          <CommandGroup heading="Products">
            {products.map((product) => (
              <CommandItem
                key={product.id}
                value={product.title}
                onSelect={() => {
                  runCommand(() => router.push(String(product.id)));
                }}
              >
                {product.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchButton;
