import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navigationLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className={cn(
          'fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-transparent transition-all duration-300',
          scrolled ? 'border-white/20 bg-gray-950 bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]' : 'bg-transparent'
        )}
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <nav className="flex items-center justify-between h-full max-w-6xl mx-auto px-4 sm:px-8">
          <a className="text-xl font-bold text-white" href="#">
            Ketan Nag
          </a>
          <ul className="hidden sm:flex items-center justify-center gap-5">
            {navigationLinks.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.href}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <a
                  className="flex w-full items-center justify-center px-3 py-3 text-gray-300 hover:text-purple-400 transition"
                  href={link.href}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
