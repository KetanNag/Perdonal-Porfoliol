import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { Code, Database, Cpu } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const BentoCard = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <motion.div
    variants={itemVariants}
    className={`relative rounded-xl border border-white/20 bg-white/5 p-6 ${className}`}
  >
    {children}
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl scroll-mt-28 text-center sm:mb-40 w-full">
      <SectionHeading>My Skills</SectionHeading>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <BentoCard className="md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <Code className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Languages</h3>
          </div>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
            {skillsData.languages.map((skill, index) => (
              <li className="bg-white/10 rounded-full px-3 py-1" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </BentoCard>
        <BentoCard className="md:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Technologies & Frameworks</h3>
          </div>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
            {skillsData.technologies.map((skill, index) => (
              <li className="bg-white/10 rounded-full px-3 py-1" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </BentoCard>
      </motion.div>
    </section>
  );
}
