import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import Image from "next/image";
import { FaqsData } from "@data/faqs-data";

const FaqList = () => {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid w-full grid-cols-1 place-items-center  md:grid-cols-2">
          <div className="min-h-[27rem] w-full md:min-h-[30rem] ">
            <h2 className="section-heading">Popular Question</h2>
            <Accordion
              type="single"
              collapsible
              className="w-full pt-4 text-foreground"
            >
              {FaqsData.map((faq, index) => (
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
