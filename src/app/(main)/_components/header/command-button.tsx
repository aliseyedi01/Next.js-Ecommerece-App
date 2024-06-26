"use client";

import { Button } from "@components/ui";
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
import { cn } from "@lib/utils";
import { CommandRegistry } from "@type/common";
import {
  Handshake,
  LaptopIcon,
  LogInIcon,
  LogOut,
  MoonIcon,
  PackageOpen,
  PersonStanding,
  Search,
  Settings,
  SmilePlus,
  SquareSlash,
  SunIcon,
  Tv2,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FC, useCallback, useEffect, useState } from "react";

import { LogoutForm } from "./logout-form";

type CommandProps = {
  className?: string;
  place?: "page" | "header";
};

const CommandButton: FC<CommandProps> = ({
  className,
  place = "header",
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

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
          route: "/products",
          icon: <PackageOpen className="mr-2 h-4 w-4" />,
        },
        {
          id: 3,
          title: "About",
          route: "/about",
          icon: <PersonStanding className="mr-2 h-4 w-4" />,
        },
        {
          id: 4,
          title: "Contact",
          route: "/contact",
          icon: <Handshake className="mr-2 h-4 w-4" />,
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          id: 5,
          title: "Sing up",
          icon: <SmilePlus className="mr-2 h-4 w-4" />,
          route: "/signup",
          shortcut: "⌘B",
          disabled: false,
        },
        {
          id: 6,
          title: "Sign In",
          icon: <LogInIcon className="mr-2 h-4 w-4" />,
          route: "/signin",
          shortcut: "⌘B",
          disabled: false,
        },
        {
          id: 7,
          title: "Profile",
          icon: <User className="mr-2 h-4 w-4" />,
          route: "/profile/view",
          shortcut: "⌘P",
          disabled: false,
        },
        {
          id: 8,
          title: "Settings",
          icon: <Settings className="mr-2 h-4 w-4" />,
          route: "/setting/appearance",
          shortcut: "⌘S",
          disabled: false,
        },
        {
          id: 9,
          title: "Log Out",
          icon: <LogOut className="mr-2 h-4 w-4" />,
          onSelect: () => {
            setOpen(false);
            setLogoutDialogOpen(true);
          },
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
      {/* Command Button */}
      <Button
        variant="ghost"
        className={cn(
          "flex w-fit flex-row  justify-between border-primary   px-2 text-sm font-normal shadow-none hover:bg-primary/30  hover:text-card-foreground md:mr-8 md:h-9 md:w-32 md:border",
          place === "page" ? "w-full border md:w-96" : "",
          className,
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        {place === "page" ? (
          <div className="flex w-full text-input">
            <Search className="size-5 md:flex" />
            <span className="ml-2 md:inline-flex">Commands</span>
          </div>
        ) : (
          <div className="flex w-full items-center text-input">
            <SquareSlash className=" size-6 text-blue-500 md:flex" />
            <span className="hidden text-blue-500 md:ml-2 md:inline-flex">
              Commands
            </span>
          </div>
        )}
      </Button>
      {/* Command Dialog */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="w-[90%] rounded-lg shadow-lg max-md:top-[27%]"
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
      {logoutDialogOpen && (
        <LogoutForm
          place="command"
          open={logoutDialogOpen}
          onOpen={setLogoutDialogOpen}
        />
      )}
    </>
  );
};

export default CommandButton;
