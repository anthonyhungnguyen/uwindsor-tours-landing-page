"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emily Chen",
      role: "First-year Computer Science Student",
      image: "https://i.pravatar.cc/100?img=1",
      quote:
        "The UWindsor Tours platform made it so easy for me to navigate campus during my first week. I was able to familiarize myself with all the buildings before even arriving on campus!",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Prospective Engineering Student",
      image: "https://i.pravatar.cc/100?img=3",
      quote:
        "As an international student, I wasn't able to visit campus before making my decision. The virtual tour gave me a real sense of what life at UWindsor would be like.",
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      role: "Faculty, School of Business",
      image: "https://i.pravatar.cc/100?img=5",
      quote:
        "I recommend UWindsor Tours to all my incoming students. It's incredibly detailed and helps students find their way around campus with ease. A fantastic technological improvement for our university.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 relative">
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
              What People Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from students, faculty, and visitors who have experienced
            UWindsor Tours
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg p-8 md:p-12 border border-white/10">
            <div className="absolute top-0 left-0 w-full h-1">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  transition: "width 0.5s ease-in-out",
                }}
              ></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-70"></div>
                <div className="relative rounded-full overflow-hidden w-20 h-20 border-2 border-white/30">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <blockquote className="text-xl md:text-2xl italic mb-6 text-gray-200">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </blockquote>
                <cite className="not-italic">
                  <p className="text-lg font-semibold text-white">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-yellow-400">
                    {testimonials[activeIndex].role}
                  </p>
                </cite>
              </motion.div>
            </div>

            <div className="flex justify-between mt-10">
              <button
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
    </section>
  );
};
