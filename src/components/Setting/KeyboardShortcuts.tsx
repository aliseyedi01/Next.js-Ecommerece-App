"use client";

import { Badge, Button } from "@components/ui";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@components/ui/drawer";

import {
  Keyboard,
  UserRound,
  Settings,
  LogOut,
  Search,
  Palette,
} from "lucide-react";

const shortcuts = [
  { icon: <UserRound />, name: "Profile", shortcut: "Ctr P" },
  { icon: <Settings />, name: "Setting", shortcut: "Ctrl S" },
  { icon: <LogOut />, name: "Log out", shortcut: "Ctrl Q" },
  { icon: <Palette />, name: "Theme", shortcut: "Ctrl T" },
  { icon: <Search />, name: "Search", shortcut: "Ctrl K" },
  { icon: <Keyboard />, name: "Keyboard", shortcut: "Ctrl F" },
];

export default function KeyboardShortcuts() {
  // const [isMobileView, setIsMobileView] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const handleResize = () => {
  //       setIsMobileView(window.innerWidth < 768);
  //     };
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }
  // }, []);

  return (
    <Drawer>
      <DrawerTrigger asChild className="hidden md:flex">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-blue-300/45  hover:backdrop-blur-lg"
        >
          <Keyboard />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-secondary">
        <DrawerHeader>
          <DrawerTitle className="text-center font-medium">
            List of Keyboard Shortcuts
          </DrawerTitle>
        </DrawerHeader>
        {/* {isMobileView ? (
          <ul className="list-none space-y-3 p-4">
            {shortcuts.map((shortcut) => (
              <li
                key={shortcut.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {shortcut.icon}
                  <p className="text-base leading-5">{shortcut.name}</p>
                </div>
                <Badge variant="outline" className="bg-slate-100">
                  {shortcut.shortcut}
                </Badge>
              </li>
            ))}
          </ul>
        ) : ( */}
        <ul className="flex flex-wrap items-center justify-center gap-4 p-5 pl-4">
          {shortcuts.map((shortcut) => (
            <li
              key={shortcut.name}
              className="flex w-40 items-center justify-start gap-6 rounded-md border p-3 hover:bg-slate-100/40 dark:border-blue-100/50"
            >
              <div>{shortcut.icon}</div>
              <div className="flex flex-col gap-2">
                <p className="text-lg">{shortcut.name}</p>
                <Badge variant="outline" className="bg-slate-100">
                  {shortcut.shortcut}
                </Badge>
              </div>
            </li>
          ))}
        </ul>
        {/* )} */}
      </DrawerContent>
    </Drawer>
  );
}
