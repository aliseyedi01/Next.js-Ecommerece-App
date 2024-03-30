import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { RootLayoutProps } from "@type/layout-props";
import { FC } from "react";

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      {" "}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
