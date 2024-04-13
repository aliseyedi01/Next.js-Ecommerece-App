import { Input } from "@components/ui";
import { Search } from "lucide-react";
import React from "react";

export default function SearchProducts() {
  return (
    <div className="w-full md:w-[450px] ">
      <Input
        type="text"
        placeholder="Search Products"
        iconOutline={<Search className="" />}
        className="h-10  rounded-xl border-blue-500/30  dark:border-blue-400"
      />
    </div>
  );
}
