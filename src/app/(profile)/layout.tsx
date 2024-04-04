import { RootLayoutProps } from "@type/layout-props";
import { FC } from "react";
import HeaderProfile from "./profile/_components/header-profile";
import NavbarProfileDesktop from "./profile/_components/navbar-profile-desktop";

const ProfileLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full md:h-screen">
      <NavbarProfileDesktop />
      <div className="flex h-full w-full flex-col">
        <HeaderProfile />
        <div className="size-full p-2 md:p-6">
          <div className="size-full rounded-lg bg-white px-3 py-5 dark:bg-[#041335] md:p-6 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
