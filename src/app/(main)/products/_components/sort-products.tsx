import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui";
import { ListFilter } from "lucide-react";

export default function SortProducts() {
  return (
    <Select>
      <div className="flex items-center justify-between rounded-md border border-blue-500/30 px-2  py-1 font-kanit text-foreground/90">
        <SelectTrigger className="w-[180px] border-none focus:ring-0 focus:ring-transparent  ">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <ListFilter />
      </div>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="rate">Best Rating</SelectItem>
          <SelectItem value="selling">Best Selling</SelectItem>
          <SelectItem value="priceHight">Price : Hight to Low</SelectItem>
          <SelectItem value="priceLow">Price : Low to Hight</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
