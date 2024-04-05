import ProfileButton from "@app/(main)/_components/header/profile-button";
import CommandButton from "@app/(main)/_components/header/command-button";
import React from "react";
import { BreadcrumbProfile } from "./breadcrumb-profile";

export default function HeaderProfile() {
  return (
    <div className="flex h-16 w-full items-center justify-between px-2 pt-2 md:px-6">
      <BreadcrumbProfile />

      <div className="flex items-center gap-2 justify-self-end">
        <CommandButton />
        <ProfileButton />
      </div>
    </div>
  );
}
