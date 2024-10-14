import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { H2 } from "./ui/typography";

// Dummy data for FAQ items
const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer service team to initiate a return.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary based on the destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's site.",
  },
  {
    question: "Are your products eco-friendly?",
    answer:
      "We are committed to sustainability and use eco-friendly materials whenever possible. Many of our products are made from recycled or biodegradable materials.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px] space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-green-500 font-bold">FAQ</p>
            <H2>Frequently Asked Questions</H2>
            <p className="max-w-[600px] text-muted-foreground mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Find answers to common questions about our products and services.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border px-2 rounded-md"
              >
                <AccordionTrigger className="focus:no-underline hover:no-underline font-normal text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
