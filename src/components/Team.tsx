"use client";

import { motion } from "framer-motion";
import { TeamCard } from "./TeamCard";

export const Team = () => {

  const advisors = [
    {
      name: "Simon Du Toit",
      role: "Product Owner",
      description:
        "Offered direction, feedback, and Undergraduate Student recruitment insights.",
      initials: "SD",
      github: "",
      linkedln: "",
      gradientFrom: "yellow-400",
      gradientTo: "yellow-600",
      delay: 0.1,
    },
    {
      name: "Aznam Yacoub",
      role: "Supervisor",
      description:
        "Provided mentorship, feedback, and academic support for the team’s success.",
      initials: "AY",
      github: "",
      linkedln: "",
      gradientFrom: "blue-400",
      gradientTo: "blue-600",
      delay: 0.2,
    },
  ];

  const teamMembers = [
    {
      name: "Thang Pham",
      role: "Team Lead",
      description:
        "Crafting engaging gameplay mechanics and interactive experiences.",
      initials: "TP",
      github: "https://github.com/tonidevvn/",
      linkedln: "https://www.linkedin.com/in/thangpham-1988-vn/",
      gradientFrom: "red-400",
      gradientTo: "red-600",
      delay: 0.2,
    },
    {
      name: "Elzaba Babu",
      role: "3D Artist",
      description:
        "Creating detailed 3D models of campus buildings. Visual Arts with expertise in 3D modeling.",
      initials: "EB",
      github: "https://github.com/elzaba/",
      linkedln: "https://www.linkedin.com/in/#/",
      gradientFrom: "yellow-400",
      gradientTo: "yellow-600",
      delay: 0.3,
    },
    {
      name: "Phuc Hung Nguyen",
      role: "UI/UX Designer",
      description:
        "Creating intuitive user interfaces and experiences. HCI specialist and front-end developer.",
      initials: "PN",
      github: "https://github.com/anthonyhungnguyen/",
      linkedln: "https://www.linkedin.com/in/anthonynguyen276/",
      gradientFrom: "purple-400",
      gradientTo: "purple-600",
      delay: 0.4,
    },
    {
      name: "Aparna Peesapati",
      role: "Quality Assurance",
      description:
        "Quality Assurance & Testing - Ensures game stability, performance, and security.",
      initials: "AP",
      github: "hhttps://github.com/apps415/",
      linkedln: "https://www.linkedin.com/in/#/",
      gradientFrom: "green-400",
      gradientTo: "green-600",
      delay: 0.5,
    },
    {
      name: "Thieu Chuong",
      role: "Developer",
      description: "Game architecture and core systems development.",
      initials: "TC",
      github: "https://github.com/ttchuong/",
      linkedln: "https://www.linkedin.com/in/chuongtat/",
      gradientFrom: "blue-400",
      gradientTo: "blue-600",
      delay: 0.2,
    },
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
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
              Our Product Owner,&nbsp;
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              and Supervisor
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Providing vision, mentorship, and academic guidance throughout the
            development of UWindsor Tours.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-8 mb-24">
          {advisors.map((advisor) => (
            <TeamCard key={advisor.initials} {...advisor} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans">
            A diverse group of passionate students and developers working
            together to revolutionize the campus tour experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
              5
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
