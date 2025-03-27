"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-xl font-semibold text-white">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>
      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      question: "How do I access the UWindsor Tours platform?",
      answer:
        "UWindsor Tours is available through our web platform at tours.uwindsor.ca. You can access it from any device with a modern web browser. For the best experience, we recommend using Chrome, Firefox, or Safari on a desktop computer.",
    },
    {
      question: "Do I need to install any special software?",
      answer:
        "No installation is required! Our platform runs in your web browser. However, for an enhanced experience with VR features, you may need to connect a compatible VR headset.",
    },
    {
      question: "Is UWindsor Tours available on mobile devices?",
      answer:
        "Yes, we have a responsive mobile version that works on smartphones and tablets. For the full 3D experience, we recommend using a desktop computer.",
    },
    {
      question: "Can I use UWindsor Tours if I'm not a student?",
      answer:
        "Absolutely! UWindsor Tours is designed for everyone interested in exploring our campus - prospective students, current students, faculty, staff, alumni, and visitors.",
    },
    {
      question: "How accurate is the virtual representation of campus?",
      answer:
        "Our team has meticulously recreated the UWindsor campus with high-definition 3D models and 360° photography to provide an accurate representation of buildings, classrooms, and facilities.",
    },
    {
      question: "How can I provide feedback about the tour experience?",
      answer:
        "We welcome your feedback! You can fill out our feedback form in the Survey section below, or contact us directly at tours@uwindsor.ca.",
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about UWindsor Tours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 -left-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};
