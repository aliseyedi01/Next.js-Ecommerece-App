import ProfileButton from "@components/header/ProfileButton";
import CommandButton from "@components/header/command-button";
import { CommandDialog } from "@components/ui";
import React from "react";

export default function HeaderProfile() {
  return (
    <div className="flex h-16 w-full items-center justify-between  px-5 pt-2">
      <CommandButton />
      <div>
        <ProfileButton />
      </div>
    </div>
  );
}
