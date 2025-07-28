"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Award, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'AWS / Cloud', level: 70 },
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    description: 'Leading development of scalable web applications using React, Next.js, and cloud technologies.',
    icon: Award,
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed and maintained multiple client projects, focusing on performance and user experience.',
    icon: Users,
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Startup Hub',
    description: 'Built responsive web applications and collaborated with design teams to create intuitive interfaces.',
    icon: MapPin,
  },
  {
    year: '2018',
    title: 'Computer Science Degree',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in software engineering and web technologies.',
    icon: Calendar,
  },
];

const stats = [
  { label: 'Years Experience', value: '6+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Lines of Code', value: '100K+' },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl font-bold"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                About <span className="text-primary">Me</span>
              </motion.h1>
              
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                I&apos;m a passionate Full Stack Developer with over 6 years of experience creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful, and intuitive designs.
              </motion.p>
              
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through tech talks and mentoring.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl blur-2xl opacity-20" />
                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg"
                    alt="Harsh Shukla"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="relative">
                  <Progress value={0} className="h-2" />
                  <motion.div
                    className="absolute top-0 left-0 h-2 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-muted-foreground">
              A timeline of my career and educational milestones.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.year}
                    className="relative flex items-start space-x-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-grow bg-background rounded-lg p-6 shadow-sm border border-border">
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
        </div>
      </section>
    </div>
  );
}