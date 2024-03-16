// style
import {
  HomeIcon,
  InfoCircledIcon,
  RocketIcon,
  ChatBubbleIcon,
  LaptopIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  AvatarIcon,
} from "@radix-ui/react-icons";
import { ShoppingCartIcon, CircleUserIcon, Search } from "lucide-react";
// next
import Link from "next/link";
// component
import { ModeToggle } from "@/components/theme/ModeToggle";

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
      <nav className="flex gap-9">
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
      <Search size={18} />
      <div className="flex items-center justify-between gap-5">
        {/* <ModeToggle /> */}
        <ShoppingCartIcon size={18} />
        <CircleUserIcon size={18} />
      </div>
    </div>
  );
};

export default Header;
