import { adidasBrand, chanelBrand, gucciBrand, levisBrand, nikeBrand, versaceBrand } from "@constants/images";


export const categories = [
  { name: "Clothing" },
  { name: "Electronics" },
  { name: "Books" },
  { name: "Home Goods" },
];


export const colors = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Orange",
    value: "orange",
  },
  {
    label: "Purple",
    value: "purple",
  },
  {
    label: "Pink",
    value: "pink",
  },
  {
    label: "Gray",
    value: "gray",
  },
];


export const BrandsFilterData = [
  {
    label: "Adidas",
    src: adidasBrand,
  },
  {
    label: "Gucci",
    src: gucciBrand
  },
  {
    label: "Versace",
    src: versaceBrand
  },
  {
    label: "Levis",
    src: levisBrand
  },
  {
    label: "Nike",
    src: nikeBrand
  },
  {
    label: "Chanel",
    src: chanelBrand
  },
];


export const SizeProducts = [
  {
    label: "XSmall",
    value: "xs",
  },
  {
    label: "Small",
    value: "s",
  },
  {
    label: "Medium",
    value: "m",
  },
  {
    label: "Large",
    value: "l",
  },
  {
    label: "XLarge",
    value: "xl",
  },
  {
    label: "2XLarge",
    value: "xxl",
  },
  {
    label: "3XLarge",
    value: "xxxl",
  },
];


export const RatingFilterData = [
  { value: "5", filledStars: 5, emptyStars: 0 },
  { value: "4", filledStars: 4, emptyStars: 1 },
  { value: "3", filledStars: 3, emptyStars: 2 },
  { value: "2", filledStars: 2, emptyStars: 3 },
  { value: "1", filledStars: 1, emptyStars: 4 },
];