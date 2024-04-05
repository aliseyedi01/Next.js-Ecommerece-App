import Footer from "@app/(main)/_components/footer/Footer";
import Header from "@app/(main)/_components/header/Header";
import NavbarMainMobile from "@app/(main)/_components/navbar/navbar-main-mobile";
import { RootLayoutProps } from "@type/layout-props";
import { FC } from "react";

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      {" "}
      <Header />
      {children}
      <Footer />
      <NavbarMainMobile />
    </>
  );
};

export default RootLayout;
