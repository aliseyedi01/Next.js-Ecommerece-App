// import AboutPage from "src/app/about/_components/AboutPage";
import type { Metadata } from "next";
import AboutPage from "./_components/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Online Shop",
};

export default function About() {
  return <AboutPage />;
}
