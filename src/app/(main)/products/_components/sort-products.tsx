import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui";

export default function SortProducts() {
  return (
    <Select>
      <SelectTrigger
        iconType="filter"
        className="w-full rounded-xl border-none border-blue-500/30 bg-transparent text-blue-800  dark:border-blue-400  md:w-[180px] md:border"
      >
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="-translate-x-3 md:translate-x-0">
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
