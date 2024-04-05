"use client";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { CircleUserIcon, Settings, User } from "lucide-react";
import Link from "next/link";
import { LogoutForm } from "./logout-form";

const ProfileButton = () => {
  const showKeyboardShortcuts = true;
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-blue-300/45 hover:backdrop-blur-lg"
          >
            <CircleUserIcon className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4 w-44 md:mr-7 md:w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/profile/view">
            <DropdownMenuItem>
              <div className="flex items-center gap-1">
                <User className="mr-2 size-4" />
                <p>Profile</p>
              </div>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/setting/appearance">
            <DropdownMenuItem>
              <div className="flex items-center gap-1">
                <Settings className="mr-2 size-4" />
                <p>Settings</p>
              </div>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <LogoutForm />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileButton;
