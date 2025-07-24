import React from 'react';
import SectionHeading from './section-heading';
import { experienceData, educationData, leadershipData } from '@/lib/data';
import { motion } from 'framer-motion';

type TimelineItemProps = {
  item: {
    title: string;
    date: string;
    description: string;
    icon: React.ElementType;
    company?: string;
    institution?: string;
    organization?: string;
    degree?: string;
  };
};

const TimelineItem = ({ item }: TimelineItemProps) => {
  const Icon = item.icon;
  return (
    <motion.div
      className="relative pl-12"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
        <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 ring-8 ring-gray-950">
            <Icon className="h-5 w-5 text-purple-300" />
        </div>
      
        <div className="flex flex-col">
            <div className="flex items-baseline gap-x-2">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.company || item.organization || item.institution}</p>
            </div>
            <time className="text-xs font-medium uppercase text-gray-500 mt-1">{item.date}</time>
            <p className="mt-3 text-gray-400 text-sm">{item.description}</p>
        </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 max-w-2xl w-full">
      <SectionHeading>My Journey</SectionHeading>
      <div className="relative border-l-2 border-slate-700/50">
        <div className="space-y-12 pl-6">
            {experienceData.map((item, index) => (
                <TimelineItem key={index} item={item} />
            ))}
            {educationData.map((item, index) => (
                <TimelineItem key={index} item={item} />
            ))}
            {leadershipData.map((item, index) => (
                <TimelineItem key={index} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
