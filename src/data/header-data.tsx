import * as React from 'react';
import { HomeIcon, InfoCircledIcon, ChatBubbleIcon, LaptopIcon } from "@radix-ui/react-icons";

export const HeaderData = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Products",
    link: "/products",
    icon: <LaptopIcon />,
  },
  {
    name: "About",
    link: "/about",
    icon: <InfoCircledIcon />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <ChatBubbleIcon />,
  },
];
