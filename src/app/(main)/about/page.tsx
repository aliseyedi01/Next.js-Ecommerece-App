// import AboutPage from "src/app/about/_components/AboutPage";
import type { Metadata } from "next";

import AboutPage from "./_components/about-page";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return <AboutPage />;
}
