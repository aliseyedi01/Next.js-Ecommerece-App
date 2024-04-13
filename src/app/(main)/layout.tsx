import Footer from "@app/(main)/_components/footer/Footer";
import Header from "@app/(main)/_components/header/Header";
import { RootLayoutProps } from "@type/layout-props";
import { FC } from "react";

import NavbarMainMobile from "./_components/navbar/navbar-main-mobile";

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <NavbarMainMobile />
    </>
  );
};

export default RootLayout;
