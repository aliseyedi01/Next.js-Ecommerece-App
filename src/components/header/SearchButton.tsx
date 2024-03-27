"use client";

import { cn } from "@lib/utils";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Settings,
  Search,
  User,
  SunIcon,
  MoonIcon,
  LaptopIcon,
  LogOut,
  LogInIcon,
  SmilePlus,
  PackageOpen,
  Tv2,
  Handshake,
  PersonStanding,
  SquareSlash,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@components/ui/command";
import { useTheme } from "next-themes";
import { Button } from "@components/ui";
import { CommandRegistry } from "@type/common";

const SearchButton = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();

  const commandRegistry: CommandRegistry = [
    {
      title: "Pages",
      items: [
        {
          id: 1,
          title: "Home",
          route: "/",
          icon: <Tv2 className="mr-2 h-4 w-4" />,
        },
        {
          id: 2,
          title: "Products",
          route: "products",
          icon: <PackageOpen className="mr-2 h-4 w-4" />,
        },
        {
          id: 3,
          title: "About",
          route: "about",
          icon: <PersonStanding className="mr-2 h-4 w-4" />,
        },
        {
          id: 4,
          title: "Contact",
          route: "contact",
          icon: <Handshake className="mr-2 h-4 w-4" />,
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          id: 5,
          title: "Sing Up",
          icon: <SmilePlus className="mr-2 h-4 w-4" />,
          route: "/signup",
          shortcut: "⌘B",
          disabled: false,
        },
        {
          id: 6,
          title: "Log In",
          icon: <LogInIcon className="mr-2 h-4 w-4" />,
          route: "/login",
          shortcut: "⌘B",
          disabled: false,
        },
        {
          id: 7,
          title: "Profile",
          icon: <User className="mr-2 h-4 w-4" />,
          route: "/profile",
          shortcut: "⌘P",
          disabled: false,
        },
        {
          id: 8,
          title: "Settings",
          icon: <Settings className="mr-2 h-4 w-4" />,
          route: "/settings",
          shortcut: "⌘S",
          disabled: false,
        },
        {
          id: 9,
          title: "Log Out",
          icon: <LogOut className="mr-2 h-4 w-4 rotate-180" />,
          route: "/logout",
          shortcut: "⌘B",
          disabled: false,
        },
      ],
    },
    {
      title: "Theme",
      items: [
        {
          id: 10,
          title: "Light",
          icon: <SunIcon className="mr-2 h-4 w-4" />,
          onSelect: () => runCommand(() => setTheme("light")),
        },
        {
          id: 11,
          title: "Dark",
          icon: <MoonIcon className="mr-2 h-4 w-4" />,
          onSelect: () => runCommand(() => setTheme("dark")),
        },
        {
          id: 12,
          title: "System",
          icon: <LaptopIcon className="mr-2 h-4 w-4" />,
          onSelect: () => runCommand(() => setTheme("system")),
        },
      ],
    },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "flex  w-fit flex-row justify-between  border-primary  px-2 text-sm font-normal text-muted-foreground  shadow-none hover:bg-primary/30  hover:text-card-foreground md:mr-8 md:h-9 md:w-64  md:border",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <div className="flex w-full text-input">
          <Search className="hidden size-5 md:flex" />
          <span className="hidden md:ml-2 md:inline-flex">
            Type / To Search
          </span>
        </div>
        <span className="select-none text-destructive-foreground/75">
          <SquareSlash className="size-7 text-blue-500" />
        </span>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="top-[30%] w-[90%] rounded-lg shadow-lg"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="text-primary scrollbar scrollbar-w-1">
          <CommandEmpty>No results found.</CommandEmpty>
          {commandRegistry.map(({ title, items }) => (
            <>
              <CommandGroup key={title} heading={title}>
                {items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.title}
                    disabled={item.disabled || false}
                    onSelect={
                      item.onSelect ||
                      (() =>
                        runCommand(() => router.push(item.route as string)))
                    }
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    {item.shortcut && (
                      <CommandShortcut>{item.shortcut}</CommandShortcut>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
