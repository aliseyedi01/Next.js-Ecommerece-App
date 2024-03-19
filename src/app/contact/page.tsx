// next
import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import SocialMedia from "@/components/contact/SocialMedia";

export const metadata: Metadata = {
  title: "Contact | Online Shop",
};

const ImageSource =
  "https://img.freepik.com/free-vector/customer-service-operators-with-headsets-computers-consulting-clients-24-7-call-center-handling-call-system-virtual-call-center-concept-illustration_335657-2329.jpg?t=st=1710852309~exp=1710855909~hmac=e1690b510ba8a6ce6a8dcbbccc92f93cef242ec72cba1bf17c86af09e8dd359f&w=996";

export default function Contact() {
  return (
    <section className="flex h-full items-start justify-center  md:h-screen ">
      <div className="grid h-full w-full grid-cols-1  p-3 max-md:gap-5 md:w-[85%] md:grid-cols-2">
        <div className="flex flex-col items-center justify-start pt-16 md:pt-8">
          <h2 className="text-3xl font-medium text-blue-600 md:text-left">
            Get In Touch
          </h2>
          <p className="py-4 text-blue-900 md:text-left">
            We are here for you! How can we help?
          </p>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center justify-start max-md:py-9">
          <Image
            src={ImageSource}
            alt="About Us Image"
            width={700}
            height={600}
            className="rounded-lg object-cover"
          />
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
