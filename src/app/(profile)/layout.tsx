import { RootLayoutProps } from "@type/layout-props";
import { FC } from "react";
import NavbarProfile from "./_components/navbar-profile";
import HeaderProfile from "./_components/header-profile";

const ProfileLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <NavbarProfile />
      <div className="flex h-full w-full flex-col">
        <HeaderProfile />
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
