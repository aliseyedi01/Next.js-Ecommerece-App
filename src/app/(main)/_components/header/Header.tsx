"use client";

// style
import { ModeToggle } from "@components/theme/ModeToggle";
import { useScrollPercentage } from "@hooks/use-scroll-percentage";
import {
  ChatBubbleIcon,
  HomeIcon,
  InfoCircledIcon,
  LaptopIcon,
} from "@radix-ui/react-icons";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CartButton } from "./cart-button";
// component
import CommandButton from "./command-button";
import ProfileButton from "./profile-button";

const ItemsData = [
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

const Header = () => {
  const pathname = usePathname();
  const scrollPercentage = useScrollPercentage();
  const [blurPercentage, setBlurPercentage] = useState(80);

  useEffect(() => {
    setBlurPercentage(98);
  }, [pathname]);

  const shadowHeader = Number(scrollPercentage) <= blurPercentage;

  return (
    <div
      className={`sticky top-0 z-50 flex h-12 items-center justify-between p-2 font-ubuntu text-blue-600 md:h-14 md:p-5 md:text-blue-400
       ${shadowHeader ? "bg-blue-600/5 shadow-md backdrop-blur-md" : ""}
       `}
    >
      <div className="flex items-center md:gap-16 ">
        {/* <NavbarButton /> */}
        <Link href="/">
          <h1 className="pl-2 font-grenze text-2xl font-bold text-primary md:text-3xl">
            Garb Shop
          </h1>
        </Link>
        <nav className="hidden gap-9 lg:flex ">
          {ItemsData.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`transform font-extrabold uppercase bg-blend-exclusion duration-200 hover:scale-110 ${
                pathname === item.link
                  ? " text-blue-600 underline  underline-offset-4"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center justify-between ">
        <CommandButton />
        {/* <KeyboardShortcuts /> */}
        <ModeToggle />
        <CartButton />
        <ProfileButton />
      </div>
    </div>
  );
};

export default Header;
