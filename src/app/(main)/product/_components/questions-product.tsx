import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui";
import { ProductsFaqsData } from "@data/faq-product-data";
import React from "react";

import NewQuestionProduct from "./new-question-product";

export default function QuestionsProduct() {
  return (
    <div className="grid h-full w-full  grid-cols-1 gap-3 md:grid-cols-2">
      <div className=" p-3">
        <Accordion
          type="single"
          collapsible
          className="w-full pt-4 text-foreground"
          defaultValue="item-0"
        >
          {ProductsFaqsData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="accordion-item w-full p-2"
            >
              <AccordionTrigger className="font-sans">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="w-full max-w-full">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="">
        <NewQuestionProduct />
      </div>
    </div>
  );
}
