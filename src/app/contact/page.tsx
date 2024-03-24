// next
import { ContactForm, SocialMedia } from "@components/contact";
import ContactPage from "@components/contact/ContactPage";
import { Skeleton } from "@components/ui";
import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Contact | Online Shop",
};

export default function Contact() {
  return <ContactPage />;
}
