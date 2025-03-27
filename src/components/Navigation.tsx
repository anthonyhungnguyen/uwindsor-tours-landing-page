'use client';

import { motion } from 'framer-motion';

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="backdrop-blur-md bg-white/10 sticky top-0 z-50 border-b border-white/10"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center font-display font-bold transform rotate-45 hover:rotate-0 transition-all duration-300">
            <span className="-rotate-45">UW</span>
          </div>
          <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
            UWindsor Tours
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          {['Features', 'Gameplay', 'About', 'Team'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group">
              <span className="text-gray-300 hover:text-white transition-colors">
                {item}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
          Play Now
        </button>
      </div>
    </motion.nav>
  );
};