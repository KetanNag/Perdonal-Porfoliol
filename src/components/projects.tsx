import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Project({ title, description, tags, icon: Icon, gridSpan }: (typeof projectsData)[number]) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        'group relative flex flex-col justify-between rounded-xl border border-white/20 bg-white/5 p-6 transition-all duration-300 hover:border-purple-500/50',
        gridSpan
      )}
    >
      <div className="absolute -right-2 -top-2 text-gray-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-right-3 group-hover:-top-3">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-400 text-sm">{description}</p>
      </div>
      <ul className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag, index) => (
          <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 max-w-4xl w-full">
      <SectionHeading>My Projects</SectionHeading>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </motion.div>
    </section>
  );
}
