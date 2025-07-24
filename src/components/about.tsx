import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-gray-300">
        I am a <span className="font-medium text-purple-400">Computer Science and Engineering</span> student with a strong foundation in full-stack development and a keen interest in AI. My journey in tech is driven by a passion for building efficient, scalable applications and solving real-world problems. I have hands-on experience developing web applications with the <span className="font-medium text-blue-400">MERN stack</span> and creating intelligent systems using <span className="font-medium text-purple-400">Python</span>.
      </p>
      <p className="text-gray-300">
        I thrive in collaborative environments and enjoy taking on leadership roles, as demonstrated by my experience organizing large-scale events. I am always eager to learn new technologies and apply my skills to create impactful solutions.
      </p>
    </motion.section>
  );
}
