"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const [openItem, setOpenItem] = useState<string>("item-0")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about studying abroad and our services.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "When should I start the application process for studying abroad?",
    answer:
      "We recommend starting the process at least 12-18 months before your intended start date. This gives you ample time for test preparation, university research, application submission, and visa processing.",
  },
  {
    question: "How do I choose the right university and program?",
    answer:
      "Our consultants will help you identify universities and programs that align with your academic background, career goals, budget, and personal preferences. We consider factors like university rankings, program structure, location, and post-graduation opportunities.",
  },
  {
    question: "What scholarships are available for international students?",
    answer:
      "There are various scholarships available, including merit-based scholarships, country-specific scholarships, university scholarships, and external funding opportunities. Our experts will help you identify and apply for scholarships that match your profile.",
  },
  {
    question: "How much does it cost to study abroad?",
    answer:
      "The cost varies depending on the country, university, program, and your lifestyle. It includes tuition fees, living expenses, health insurance, and travel costs. We provide detailed financial planning to help you prepare for the investment.",
  },
  {
    question: "What are the language requirements for studying abroad?",
    answer:
      "Most universities require proof of language proficiency through tests like IELTS, TOEFL, or PTE for English-speaking countries. The required scores vary by institution and program. We offer test preparation services to help you meet these requirements.",
  },
  {
    question: "How does the visa application process work?",
    answer:
      "The visa process varies by country but typically requires proof of admission, financial capability, health insurance, and intent to return. Our visa experts guide you through document preparation, application submission, and interview preparation.",
  },
  {
    question: "What services does EduConsult provide?",
    answer:
      "We offer comprehensive services including university selection, application preparation, scholarship guidance, test preparation, visa assistance, pre-departure orientation, and post-arrival support. Our goal is to support you throughout your international education journey.",
  },
  {
    question: "What is your success rate for university admissions?",
    answer:
      "We maintain a 98% success rate for university admissions. Our personalized approach, expertise in application strategies, and strong relationships with universities contribute to our high success rate.",
  },
]
