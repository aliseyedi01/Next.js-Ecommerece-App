import AboutPage from "@components/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Online Shop",
};

export default function About() {
  return <AboutPage />;
}
