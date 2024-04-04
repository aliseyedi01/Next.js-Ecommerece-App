import {
  Bell,
  Heart,
  LogOut,
  Paintbrush,
  ShoppingBasket,
  UserRound,
  UserRoundCog,
  UserRoundMinus,
} from "lucide-react";

export const NavbarProfileData = [
  {
    title: "account",
    items: [
      { name: "profile", icon: <UserRound />, link: "/profile/view" },
      { name: "edit profile", icon: <UserRoundCog />, link: "/profile/edit" },
    ],
  },
  {
    title: "order",
    items: [
      { name: "my Order", icon: <ShoppingBasket />, link: "/my-orders" },
      { name: "favorites", icon: <Heart />, link: "/favorites" },
    ],
  },
  {
    title: "settings",
    items: [
      { name: "appearance", icon: <Paintbrush />, link: "/setting/appearance" },
      { name: "notifications", icon: <Bell />, link: "/setting/notifications" },
    ],
  },
  {
    title: "actions",
    items: [
      {
        name: "delete account",
        icon: <UserRoundMinus />,
        link: "/profile/delete",
      },
      // { name: "log out", icon: <LogOut />, link: "/logout" },
    ],
  },
];
