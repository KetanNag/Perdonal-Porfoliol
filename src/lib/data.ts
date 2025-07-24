import { Github, Linkedin, Briefcase, School, Star, BrainCircuit, Code, ArrowUpRight } from 'lucide-react';

export const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
] as const;

export const skillsData = {
  languages: ["Python", "JavaScript", "C", "HTML/CSS", "Java", "SQL"],
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub", "Flask", "OpenCV", "Power BI", "Scikit-learn", "Pandas", "NumPy", "MySQL", "Mailtrap"]
};

export const projectsData = [
  {
    title: "Full Stack College Portal",
    description: "A comprehensive college management system with features for authentication, filtering, and admin/user dashboards, built with a scalable backend.",
    tags: ["React", "Node.js", "Express", "MySQL", "Mailtrap"],
    icon: ArrowUpRight,
    gridSpan: "col-span-2 row-span-1",
  },
  {
    title: "Face Recognition Attendance System",
    description: "An automated attendance system using facial recognition to streamline tracking and reduce manual entry.",
    tags: ["Python", "Flask", "OpenCV"],
    icon: ArrowUpRight,
    gridSpan: "col-span-1 row-span-1",
  },
  {
    title: "Movie Recommendation System",
    description: "A content-based recommendation engine that suggests movies to users based on similarity using the KNN algorithm.",
    tags: ["Python", "NumPy", "Pandas", "KNN"],
    icon: ArrowUpRight,
    gridSpan: "col-span-1 row-span-1",
  },
  {
    title: "Climate Change Modeling",
    description: "Data analysis and visualization of climate change trends using Python and Power BI to derive insights from complex datasets.",
    tags: ["Python", "Power BI", "Scikit-learn"],
    icon: ArrowUpRight,
    gridSpan: "col-span-2 row-span-1",
  },
];

export const experienceData = [
    {
      title: "Web Developer Intern",
      company: "Zidio Development",
      date: "Jun 2024 - Jul 2024",
      description: "Developed a full-stack Resume Builder application using the MERN stack (React, Node.js, Express, MongoDB) and built RESTful APIs for core functionalities.",
      icon: Briefcase,
    },
];

export const educationData = [
    {
      institution: "Pandit Deendayal Energy University",
      degree: "B.Tech in Computer Science & Engineering",
      date: "2021 - 2025",
      icon: School,
    }
];

export const leadershipData = [
    {
        title: "Core Committee Member",
        organization: "JCI Club",
        date: "2023 - 2024",
        description: "Organized and managed technical and cultural events, impacting over 300 students and fostering community engagement.",
        icon: Star,
    }
];
