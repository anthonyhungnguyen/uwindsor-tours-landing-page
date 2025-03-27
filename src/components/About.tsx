"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                UWindsor Tours
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              UWindsor Tours is an innovative virtual campus exploration
              platform designed to help prospective students, new enrollees, and
              visitors navigate the University of Windsor campus with ease.
            </p>
            <p className="text-gray-400 mb-6">
              Developed by a team of passionate UWindsor students from the
              School of Computer Science, our interactive 3D tour experience
              brings the campus to life from anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <p className="font-semibold text-yellow-400">25+</p>
                <p className="text-sm text-gray-400">Campus Buildings</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <p className="font-semibold text-yellow-400">100+</p>
                <p className="text-sm text-gray-400">Points of Interest</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <p className="font-semibold text-yellow-400">360°</p>
                <p className="text-sm text-gray-400">Virtual Views</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur opacity-20 animate-pulse"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 mix-blend-overlay"></div>
              <div className="p-6 h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center mb-4">
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
                    className="text-blue-900"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">
                  Watch our campus tour preview
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};
