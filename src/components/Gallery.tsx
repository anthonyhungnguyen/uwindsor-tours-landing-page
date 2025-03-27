"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryItems = [
    {
      id: 1,
      title: "Dillon Hall",
      thumbnail: "https://placehold.co/600x400/2a4d69/ffffff?text=Dillon+Hall",
      fullImage: "https://placehold.co/1200x800/2a4d69/ffffff?text=Dillon+Hall",
      description: "Historic Dillon Hall featuring Gothic architecture and modern classrooms.",
    },
    {
      id: 2,
      title: "Leddy Library",
      thumbnail: "https://placehold.co/600x400/4b86b4/ffffff?text=Leddy+Library",
      fullImage: "https://placehold.co/1200x800/4b86b4/ffffff?text=Leddy+Library",
      description: "Four floors of study spaces, resources, and research facilities.",
    },
    {
      id: 3,
      title: "Erie Hall",
      thumbnail: "https://placehold.co/600x400/2a4d69/ffffff?text=Erie+Hall",
      fullImage: "https://placehold.co/1200x800/2a4d69/ffffff?text=Erie+Hall",
      description: "Home to the Faculty of Human Kinetics and athletic facilities.",
    },
    {
      id: 4,
      title: "CAW Student Centre",
      thumbnail: "https://placehold.co/600x400/4b86b4/ffffff?text=CAW+Student+Centre",
      fullImage: "https://placehold.co/1200x800/4b86b4/ffffff?text=CAW+Student+Centre",
      description: "The hub of student life featuring dining, study, and event spaces.",
    },
    {
      id: 5,
      title: "Toldo Health Education Centre",
      thumbnail: "https://placehold.co/600x400/2a4d69/ffffff?text=Toldo+Centre",
      fullImage: "https://placehold.co/1200x800/2a4d69/ffffff?text=Toldo+Centre",
      description: "Modern facilities for Nursing and other health science programs.",
    },
    {
      id: 6,
      title: "Essex Hall",
      thumbnail: "https://placehold.co/600x400/4b86b4/ffffff?text=Essex+Hall",
      fullImage: "https://placehold.co/1200x800/4b86b4/ffffff?text=Essex+Hall",
      description: "Science and Engineering laboratories and lecture halls.",
    },
  ];

  return (
    <section id="gallery" className="py-20 relative">
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
              Tour Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preview what you'll experience in our interactive campus tour
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10">
                <div className="aspect-video relative">
                  <Image 
                    src={item.thumbnail} 
                    alt={item.title} 
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src={galleryItems[selectedImage].fullImage} 
                  alt={galleryItems[selectedImage].title}
                  width={1200}
                  height={800}
                  className="object-contain"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-4 mt-2 rounded-lg">
                <h3 className="text-xl font-semibold text-white">{galleryItems[selectedImage].title}</h3>
                <p className="text-gray-300">{galleryItems[selectedImage].description}</p>
              </div>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1);
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-32 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
    </section>
  );
};