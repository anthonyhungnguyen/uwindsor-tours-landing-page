'use client';

import { motion } from 'framer-motion';
import { TeamCard } from './TeamCard';

export const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      description: "Game architecture and core systems development. CS student with a passion for game development.",
      initials: "JD",
      gradientFrom: "blue-400",
      gradientTo: "blue-600",
      delay: 0.2
    },
    {
      name: "Alice Smith",
      role: "3D Artist",
      description: "Creating detailed 3D models of campus buildings. Visual Arts student with expertise in 3D modeling.",
      initials: "AS",
      gradientFrom: "yellow-400",
      gradientTo: "yellow-600",
      delay: 0.4
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      description: "Creating intuitive user interfaces and experiences. HCI specialist and front-end developer.",
      initials: "MJ",
      gradientFrom: "purple-400",
      gradientTo: "purple-600",
      delay: 0.6
    }
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans">
            A diverse group of passionate students and developers working together to 
            revolutionize the campus tour experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.initials} {...member} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 mb-2">
              3+
            </div>
            <p className="text-gray-400 font-sans">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 mb-2">
              15+
            </div>
            <p className="text-gray-400 font-sans">Team Members</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200 mb-2">
              50+
            </div>
            <p className="text-gray-400 font-sans">Buildings Modeled</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200 mb-2">
              1000+
            </div>
            <p className="text-gray-400 font-sans">Beta Users</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};