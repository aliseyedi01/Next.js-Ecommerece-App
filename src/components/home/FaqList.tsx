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
    <section className="w-full  py-14">
      <div className="mx-auto w-full max-w-7xl  px-5 sm:px-6">
        <div className="bg -emerald-700 grid w-full grid-cols-1 place-items-center  md:grid-cols-2">
          <div className="min-h-[25rem]  w-full ">
            <h3 className="text-2xl font-bold text-blue-800">
              Popular Question
            </h3>
            <Accordion
              type="single"
              collapsible
              className="w-full text-blue-950"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  className="w-full"
                  value={`item-${index}`}
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
