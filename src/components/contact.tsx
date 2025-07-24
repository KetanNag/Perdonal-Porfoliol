import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-400 -mt-6">
        Please contact me directly at{' '}
        <a className="underline text-purple-400" href="mailto:ketan.nag@example.com">
          ketan.nag@example.com
        </a>{' '}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input className="h-14 px-4 rounded-lg border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-300" name="senderEmail" type="email" required maxLength={500} placeholder="Your email" />
        <textarea className="h-52 my-3 rounded-lg border border-white/20 p-4 bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-300" name="message" placeholder="Your message" required maxLength={5000} />
        <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:shadow-purple-500/50 disabled:scale-100 disabled:bg-opacity-65 self-center font-semibold">
          Submit <Send className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
