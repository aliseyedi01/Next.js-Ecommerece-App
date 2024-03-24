import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import Image from "next/image";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Provide information on the ordering process, including steps to add items to the cart, checkout procedures, and any account creation requirements.",
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
  {
    question: "International shipping?",
    answer: "Yes, we ship worldwide. Contact us for details.",
  },
];

const FaqList = () => {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid w-full grid-cols-1 place-items-center  md:grid-cols-2">
          <div className="min-h-[22rem] w-full md:min-h-[26rem] ">
            <h2 className="section-heading">Popular Question</h2>
            <Accordion
              type="single"
              collapsible
              className="w-full pt-4 text-foreground"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="accordion-item w-full p-2"
                >
                  <AccordionTrigger className="text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="w-full max-w-full">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className=" ">
            <Image
              src="/images/pages/faq.svg"
              alt="About Us Image"
              width={500}
              height={500}
              className="hidden md:flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqList;
