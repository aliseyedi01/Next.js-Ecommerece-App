import ProfileButton from "@components/header/profile-button";
import CommandButton from "@components/header/command-button";
import React from "react";
import { NavbarProfileMobile } from "./navbar-profile-mobile";

export default function HeaderProfile() {
  return (
    <div className="flex h-16 w-full items-center justify-between px-2  pt-2 md:px-6">
      <CommandButton />
      <div>
        <NavbarProfileMobile />
        <ProfileButton />
      </div>
    </div>
  );
}
