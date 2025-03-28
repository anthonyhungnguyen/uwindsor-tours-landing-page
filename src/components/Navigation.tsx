"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // All navigation items including new sections
  const navItems = [
    { name: "Home", href: "#", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "About", href: "#about", id: "about" },
    { name: "Team", href: "#team", id: "team" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ];

  // Handle scroll events to update active section and navigation background
  useEffect(() => {
    const handleScroll = () => {
      // Add background opacity when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`backdrop-blur-md ${
        scrolled ? "bg-gray-900/80" : "bg-transparent"
      } sticky top-0 z-50 border-b border-white/10 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.a
          href="#"
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
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`transition-colors relative group ${
                  activeSection === item.id
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#survey"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-600/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Give Feedback
          </motion.a>
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
                className={`transition-colors py-2 border-b border-white/10 ${
                  activeSection === item.id
                    ? "text-white font-medium"
                    : "text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#survey"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 px-6 py-3 rounded-full font-semibold mt-4 self-start"
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              Give Feedback
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
