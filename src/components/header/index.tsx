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

const ItemsData = [
  {
    name: "Home",
    link: "/home",
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
    <div className="flex items-center justify-between p-5 font-ubuntu">
      <h1>Online Shop</h1>
      <nav className="hidden gap-9 lg:flex">
        {ItemsData.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="hover:text-blue-600"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-between gap-5">
        <SearchButton />
        <ModeToggle />
        <CartButton />
        <ProfileButton />
      </div>
    </div>
  );
};

export default Header;
