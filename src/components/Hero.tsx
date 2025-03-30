"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 -top-10 -left-10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-20 -bottom-10 -right-10"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-yellow-200">
                Experience Campus
              </span>
              <span className="block mt-2">In A New Reality</span>
            </h1>
            <p className="text-xl text-gray-300 font-sans">
              Step into the future of campus tours with our immersive 3D
              experience. Explore, learn, and connect with UWindsor like never
              before.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full">
                <span className="relative z-10 text-blue-900 font-bold">
                  <a href="#features">Start Exploring</a>
                </span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
              <button className="group relative px-8 py-3 border-2 border-white/30 rounded-full hover:border-white/50 transition-colors">
                <a
                  href="https://tonidevpro.itch.io/uwindsor-tour?secret=PWEZpLm790tlPgJxXSffQpbkIIk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10">Watch Demo</span>
                </a>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/hipanel.jpg"
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/20"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
