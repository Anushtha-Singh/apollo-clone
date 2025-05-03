"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "What is the role of a general physician or GP?",
    answer:
      "A general physician or GP is the first point of contact for patients seeking medical care. They diagnose and treat a wide range of health conditions, provide preventive care, manage chronic diseases, and refer patients to specialists when necessary. General physicians take a holistic approach to healthcare, considering the physical, mental, and social aspects of a patient's health to provide comprehensive care.",
  },
  {
    question: "When should I visit a general physician for a fever?",
    answer:
      "You should visit a general physician for a fever if it persists for more than 3 days, exceeds 103°F (39.4°C), is accompanied by severe headache, stiff neck, rash, or confusion, or if you have underlying health conditions that may be complicated by fever. A doctor for fever can diagnose the underlying cause and provide appropriate treatment to help you recover quickly.",
  },
  {
    question: "Can a general physician help manage my diabetes?",
    answer:
      "Yes, general physicians are well-equipped to help manage diabetes. As diabetes doctors, they can diagnose the condition, prescribe medications, monitor blood sugar levels, provide dietary and lifestyle advice, and help prevent complications. They also coordinate care with other specialists when needed to ensure comprehensive diabetes management.",
  },
  {
    question: "How can I book an appointment with a general physician near me?",
    answer:
      "You can book an appointment with a general physician near you through the Apollo 24|7 website or mobile app. Simply search for 'general physician near me', browse through the available doctors, check their profiles, reviews, and fees, and select a convenient time slot. You can choose between online consultations or in-person visits based on your preference.",
  },
  {
    question: "What is the average general physician fee for a consultation?",
    answer:
      "The general physician fee for a consultation typically ranges from ₹400 to ₹1200, depending on factors such as the doctor's experience, location, and consultation type (online or in-person). Apollo 24|7 provides transparent fee information for all doctors, allowing you to choose a physician that fits your budget.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold text-[#02475b] mb-6">FAQs</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button className="flex justify-between items-center w-full text-left" onClick={() => toggleFaq(index)}>
              <h3 className="font-medium text-[#02475b]">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openIndex === index && <div className="mt-2 text-gray-600 text-sm">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
