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
    question: "What features does the accounting application offer?",
    answer:
      "Our application provides features such as expense tracking, invoicing, profit and loss reports, tax calculation, and inventory management, specifically designed for small enterprises.",
  },
  {
    question: "Is the application cloud-based?",
    answer:
      "Yes, our accounting application is fully cloud-based, allowing you to access your financial data from anywhere, at any time, with secure storage and backups.",
  },
  {
    question: "Can I generate tax reports with this application?",
    answer:
      "Yes, you can easily generate tax reports based on your business transactions, helping you stay compliant with tax regulations.",
  },
  {
    question: "Does the application allow multiple user accounts?",
    answer:
      "Yes, you can create multiple user accounts with different permission levels, ensuring that team members can access only the features and data relevant to their roles.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes, we offer dedicated customer support to help you with any questions or issues. You can contact us via email, phone, or live chat.",
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
