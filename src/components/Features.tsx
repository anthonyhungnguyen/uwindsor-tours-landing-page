"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Features = () => {
  const features = [
    {
      title: "Interactive Campus Tours",
      description:
        "Explore UWindsor campus in stunning 3D with interactive points of interest and detailed building information.",
      icon: "/globe.svg",
    },
    {
      title: "Virtual Classroom Experience",
      description:
        "Step inside lecture halls and classrooms to get a feel for the learning environment before attending in person.",
      icon: "/window.svg",
    },
    {
      title: "Self-Guided Navigation",
      description:
        "Find your way around campus with custom routes and detailed directions to any building or facility.",
      icon: "/file.svg",
    },
  ];

  return (
    <section id="features" className="py-20">
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
              Key Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes UWindsor Tours the perfect way to explore campus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
