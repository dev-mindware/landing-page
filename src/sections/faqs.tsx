"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
} from "@/components";
import { FAQList } from "./data";
import { motion } from "framer-motion";

export function FaqsSection() {
  return (
    <section id="faqs" className="py-20 min-h-screen ">
      <div className="flex flex-col items-center space-y-6">
        <Badge variant={"secondary"} className="mt-4 md:mt-0">
          Perguntas Frequentes
        </Badge>
        <Accordion type="single" collapsible className="w-full AccordionRoot" >
          {FAQList.map((FAQ, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <AccordionItem key={FAQ.value} value={FAQ.value}>
                <AccordionTrigger className="text-lg text-left">
                  {FAQ.question}
                </AccordionTrigger>
                <AccordionContent className="text-md">{FAQ.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
          <a
            rel="noreferrer noopener"
            href="#"
            className="tag mt-8 gap-2 transition-all"
          >
             Ainda tem Perguntas? <span className="text-primary">Contacte-nos</span>
          </a>
      </div>
    </section>
  );
}
