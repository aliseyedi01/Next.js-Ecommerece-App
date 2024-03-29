// next
import type { Metadata } from "next";
import ContactPage from "./_components/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Online Shop",
};

export default function Contact() {
  return <ContactPage />;
}
