// app/contact/page.jsx
"use client"; 
import React, { useState } from "react";
import { Phone, MapPin, Mail, ChevronDown } from "lucide-react";

const contacts = [
  {
    icon: <Phone size={28} className="text-teal-600" />,
    text: "09876765476",
  },
  {
    icon: <MapPin size={28} className="text-teal-600" />,
    text: "2nd floor TAKEN business complex opposite former NITEL office, old airport junction, Jos, Plateau State.",
  },
  {
    icon: <Mail size={28} className="text-teal-600" />,
    text: "ListingST@gmail.com",
  },
];

const faqs = [
  { question: "What is Kasuwan Giza?", answer: "Kasuwan Giza is an online marketplace where you can order and sell items easily." },
  { question: "How do I place an order?", answer: "Simply browse products, add them to your cart, and proceed to checkout." },
  { question: "Is the app free to use?", answer: "Yes, downloading and using the app is completely free." },
  { question: "What if I have an issue with my order?", answer: "You can contact our support team directly via phone or email for assistance." },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      {/* Contact Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
        Contact
      </h2>
      <p className="text-gray-500 mb-8 text-center text-sm md:text-base max-w-2xl">
        Get in touch with us today
      </p>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mb-16">
        {contacts.map((item, i) => (
          <div
            key={i}
            className="bg-[#E8F7F4] rounded-[15px] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition h-full"
          >
            {item.icon}
            <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed break-words">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-3xl px-2 sm:px-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
          Frequently Asked Questions (FAQ)
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg bg-white shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-800 text-sm sm:text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
