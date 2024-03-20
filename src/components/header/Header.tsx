"use client";

// style
import {
  HomeIcon,
  InfoCircledIcon,
  ChatBubbleIcon,
  LaptopIcon,
} from "@radix-ui/react-icons";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// component
import SearchButton from "./SearchButton";
import ProfileButton from "./ProfileButton";
import { CartButton } from "./CartButton";
import KeyboardShortcuts from "../Setting/KeyboardShortcuts";
import { NavbarButton } from "./NavbarMobile";
import { useScrollPercentage } from "@/hooks/UseScrollPercentage";

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
  const shadowHeader = Number(scrollPercentage) < 80;

  return (
    <div
      className={`sticky top-0 z-50 flex  items-center justify-between p-2 font-ubuntu text-blue-400   md:p-5
       ${shadowHeader ? "backdrop-blur-md dark:shadow-[0_0_15px_5px_rgba(80,92,212,0.6)]" : ""}
       ${pathname === "/" ? "mix-blend-color-dodge" : ""}
       `}
    >
      <div className="flex items-center md:gap-16">
        <NavbarButton />
        <Link href="/">
          <h1>Online Shop</h1>
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
        <SearchButton />
        <KeyboardShortcuts />
        <CartButton />
        <ProfileButton />
      </div>
    </div>
  );
};

export default Header;
