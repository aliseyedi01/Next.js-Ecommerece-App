// style
import {
  HomeIcon,
  InfoCircledIcon,
  ChatBubbleIcon,
  LaptopIcon,
} from "@radix-ui/react-icons";
// next
import Link from "next/link";
// component
import { ModeToggle } from "@/components/theme/ModeToggle";
import SearchButton from "./search-button";
import ProfileButton from "./profile-button";
import { CartButton } from "./cart-button";
import KeyboardShortcuts from "../Setting/keyboard-shortcuts";
import { NavbarButton } from "./navbar-mobile";

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
    name: "Contact Us",
    link: "/contact",
    icon: <ChatBubbleIcon />,
  },
];

const Header = () => {
  return (
    <div className=" flex items-center  justify-between p-2 font-ubuntu md:p-5">
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
              className="uppercase hover:text-blue-600"
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
