import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Mail } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroCard = ({ href, icon: Icon, text }: { href: string; icon: React.ElementType; text: string }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 p-4 text-sm font-medium text-gray-300 transition-colors hover:border-purple-500/50 hover:text-white"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Icon className="h-5 w-5 text-purple-400" />
        <span>{text}</span>
    </motion.a>
);

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern">
            <div className="absolute inset-0 bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

      <motion.div 
        className="relative z-10 grid max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="flex justify-center" variants={itemVariants}>
            <img src="https://img-wrapper.vercel.app/image?url=https://placehold.co/160x160/0C0C0F/8b5cf6/png?text=KN" alt="Ketan Nag" className="h-40 w-40 rounded-full border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20" />
        </motion.div>

        <div className="flex flex-col items-center gap-6 md:items-start">
            <motion.div className="text-center md:text-left" variants={itemVariants}>
                <h1 className="text-4xl font-bold text-white sm:text-5xl !leading-tight">
                    Ketan Nag
                </h1>
                <p className="mt-2 text-lg text-gray-300 sm:text-xl">
                    Full Stack Developer & AI Enthusiast
                </p>
            </motion.div>

            <motion.div className="grid w-full grid-cols-2 gap-4" variants={containerVariants}>
                <HeroCard href="/resume.pdf" icon={Download} text="Resume" />
                <HeroCard href="https://www.linkedin.com/in/ketan-nag-02052003/" icon={Linkedin} text="LinkedIn" />
                <HeroCard href="https://github.com/ketannag" icon={Github} text="GitHub" />
                <HeroCard href="mailto:ketan.nag@example.com" icon={Mail} text="Email" />
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
