import { RootLayoutProps } from "@type/layout-props";
import { FC } from "react";
import NavbarProfile from "./profile/_components/navbar-profile";
import HeaderProfile from "./profile/_components/header-profile";

const ProfileLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <NavbarProfile />
      <div className="flex h-full w-full flex-col">
        <HeaderProfile />
        <div className="size-full p-6">
          <div className="size-full rounded-lg bg-white p-6 dark:bg-sky-900 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
