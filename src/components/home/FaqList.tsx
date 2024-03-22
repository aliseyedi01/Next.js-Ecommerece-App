import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Provide information on the ordering process, including steps to add items to the cart, checkout procedures, and any account creation requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "List the various payment options available to customers, such as credit/debit cards, PayPal, Apple Pay, Google Pay, etc.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Detail your return and exchange policy, including eligibility criteria, timeframes, and any restocking fees or return shipping costs.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Explain how customers can track their orders, whether through order confirmation emails, account dashboards, or shipment tracking links.",
  },
  // {
  //   question: "Do you offer international shipping?",
  //   answer:
  //     "Clarify whether you offer shipping beyond your domestic region, including any additional costs, delivery times, and countries you ship to.",
  // },
  // {
  //   question: "What if I receive a damaged or defective item?",
  //   answer:
  //     "Outline the procedure for handling damaged or defective items, including how to report issues, initiate returns or exchanges, and receive refunds or replacements.",
  // },
];

const FaqList = () => {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-2">
          <div className="min-h-[25rem]">
            <h3 className="text-2xl font-bold text-blue-800">
              Popular Question
            </h3>
            <Accordion
              type="single"
              collapsible
              className="w-full text-blue-950"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} className="" value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="">
            <Image
              src="/images/pages/faq1.svg"
              alt="About Us Image"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqList;
