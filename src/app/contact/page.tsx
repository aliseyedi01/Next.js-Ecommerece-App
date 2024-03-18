import * as z from "zod";
// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// next
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact | Online Shop",
};

export default function About() {
  return (
    <section className="">
      <div className=" container flex items-center justify-center p-5">
        <div className=" w-full space-y-3 md:w-1/2">
          <h2 className=" mb-4 text-center text-3xl font-medium text-blue-600 md:text-left">
            Get In Touch
          </h2>
          <p className="text-blue-900">We are here for you! How can we help?</p>
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1710798075~exp=1710801675~hmac=6ebff3da57cdc2012e0f3c06ef20f6187c8419e59ee1b390790b659d051989ab&w=740"
            alt="About Us Image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
