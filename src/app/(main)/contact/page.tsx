import type { Metadata } from "next";

import ContactPage from "./_components/contact-page";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactPage />;
}
