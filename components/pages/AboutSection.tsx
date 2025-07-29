"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users, Code, Database, Cloud, Palette, FileCode, Database as DatabaseIcon, Server, GitBranch, Zap, LayoutDashboard, TerminalSquare, Cpu, Figma, Braces, BadgeCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const skills = [
    { name: 'React', icon: FileCode },
    { name: 'Next.js', icon: LayoutDashboard },
    { name: 'TypeScript', icon: Code },
    { name: 'JavaScript', icon: Braces },
    { name: 'HTML5', icon: BadgeCheck },       
    { name: 'CSS3', icon: BadgeCheck },        
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Framer Motion', icon: Zap },
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: TerminalSquare },
    { name: 'MongoDB', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'Docker', icon: Server },
    { name: 'AWS', icon: Cloud },
    { name: 'Python', icon: Cpu },
    { name: 'Figma', icon: Figma },
  ];

const timeline = [
  {
    year: '2024 - Present',
    title: 'Product Engineer',
    company: 'RagaAI (via Observance Solutions)',
    description: 'Working on AI-powered web applications with complex UI integrations, charts, and visualizations. Contributed to performance optimization, design systems, and testing.',
    icon: Award,
  },
  {
    year: '2022 - 2024',
    title: 'Associate Software Engineer',
    company: 'CedCoss',
    description: 'Built scalable e-commerce platforms using React, Next.js, and Tailwind CSS. Collaborated with cross-functional teams to deliver responsive, user-friendly UIs.',
    icon: Code,
  },
  {
    year: '2021 - 2022',
    title: 'Freelance Developer',
    company: 'Remote',
    description: 'Built client projects and personal apps using React and Node.js, focused on learning and real-world problem solving.',
    icon: Users,
  },
  {
    year: '2019 - 2022',
    title: 'Computer Science Degree',
    company: 'KNIT',
    description: 'Post-Graduated with a strong foundation in software engineering, web development, and algorithms.',
    icon: Calendar,
  },
];

export default function About() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/80 dark:bg-muted/35">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 3+ years of experience building scalable web applications
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About Me & Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* About Me Text */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Full Stack Developer based in Lucknow, India, specializing in building modern, responsive web applications that combine clean design with robust functionality. With 3+ years of experience, I&apos;ve worked on impactful projects in AI-powered products and e-commerce platforms, delivering scalable and performance-optimized solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, I enjoy exploring new technologies, enjoy tackling algorithmic challenges, and continuously refining my skills in frontend, backend, and AI-driven development. I believe in lifelong learning and crafting user-centric digital experiences that make a difference.
              </p>
            </div>

            {/* Skills & Technologies */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Skills & Technologies</h2>
                <p className="text-muted-foreground">
                  Here are some of the technologies I work with on a regular basis.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="px-4 py-2 text-sm font-medium bg-card border border-border hover:bg-accent transition-colors"
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {skill.name}
                      </Badge>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Career Timeline */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold">Career Timeline</h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.year}
                      className="relative flex items-start space-x-6"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Timeline Icon */}
                      <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      
                      {/* Timeline Content - Direct on background */}
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <Badge variant="outline">{item.year}</Badge>
                        </div>
                        <p className="text-primary font-medium mb-2">{item.company}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}