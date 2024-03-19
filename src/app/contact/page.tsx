import * as z from "zod";
// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// next
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/contact-form";
import SocialMedia from "@/components/contact/social-media";

export const metadata: Metadata = {
  title: "Contact | Online Shop",
};

const ImageSource =
  "https://img.freepik.com/free-vector/social-networking-concept-illustration_114360-861.jpg?w=740";

export default function About() {
  return (
    <section className="flex h-full items-start justify-center  md:h-screen ">
      <div className="grid  h-full w-full grid-cols-1  p-3 max-md:gap-5 md:w-[80%] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center max-md:pt-14">
          <h2 className="text-3xl font-medium text-blue-600 md:text-left">
            Get In Touch
          </h2>
          <p className="py-4 text-blue-900 md:text-left">
            We are here for you! How can we help?
          </p>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center justify-start">
          <Image
            src={ImageSource}
            alt="About Us Image"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
