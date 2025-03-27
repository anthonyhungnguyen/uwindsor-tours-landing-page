"use client";

import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Access the Platform",
      description: "Visit tours.uwindsor.ca from any device or scan the QR code available at campus information points.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Select Your Tour Type",
      description: "Choose between self-guided exploration, guided virtual tours, or specific building/department tours.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Navigate the Campus",
      description: "Use intuitive controls to move around campus, enter buildings, and interact with points of interest.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Explore Points of Interest",
      description: "Click on highlighted markers to discover important locations, services, and information about campus facilities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
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
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with UWindsor Tours in just a few simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400/80 via-yellow-500/50 to-yellow-600/30 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} gap-4`}>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Step {step.id}:
                    </h3>
                    <h4 className="text-2xl font-display font-bold text-yellow-400">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-lg text-gray-300 mt-2">{step.description}</p>
                </div>
                
                {/* Center circle with icon */}
                <div className="relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                    <div className="text-blue-900">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Final step - Get started */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-medium text-lg rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Start Your Virtual Tour Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-32 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};