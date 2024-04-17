import { create } from "@storybook/theming/create";
import { themes } from "@storybook/theming";

export default create({
  ...themes.dark,

  brandTitle: "Garb Shop",
  brandUrl: "https://github.com/aliseyedi01/Next.js-Ecommerece-App",
  brandImage: "image-brand.svg",
  brandTarget: "_self",
});
