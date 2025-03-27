"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="backdrop-blur-md bg-white/10 sticky top-0 z-50 border-b border-white/10"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center font-display font-bold transform rotate-45 hover:rotate-0 transition-all duration-300">
            <span className="-rotate-45">UW</span>
          </div>
          <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
            UWindsor Tours
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
          <motion.button
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-600/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
                }
                className="h-0.5 bg-white block w-6 rounded-full"
              ></motion.span>
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 bg-white block w-5 rounded-full"
              ></motion.span>
              <motion.span
                animate={
                  isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
                }
                className="h-0.5 bg-white block w-6 rounded-full"
              ></motion.span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gradient-to-b from-white/5 to-white/0"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 px-6 py-3 rounded-full font-semibold mt-4 self-start"
              whileTap={{ scale: 0.95 }}
            >
              Play Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
