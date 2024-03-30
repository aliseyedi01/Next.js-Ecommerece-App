import { RootLayoutProps } from "@type/common";
import { FC } from "react";

const ProfileLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
};

export default ProfileLayout;
