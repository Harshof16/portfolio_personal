"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, Stripe, and Supabase. Features include user authentication, product management, cart functionality, and payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
    githubUrl: 'https://github.com/johndoe/ecommerce-platform',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    date: '2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Material-UI'],
    githubUrl: 'https://github.com/johndoe/task-manager',
    demoUrl: 'https://taskmanager-demo.vercel.app',
    date: '2023',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    technologies: ['Vue.js', 'Express.js', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/johndoe/weather-dashboard',
    demoUrl: 'https://weather-demo.vercel.app',
    date: '2023',
    featured: false,
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'An analytics dashboard for social media metrics with data visualization, reporting, and insights generation.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'D3.js'],
    githubUrl: 'https://github.com/johndoe/social-analytics',
    demoUrl: 'https://analytics-demo.vercel.app',
    date: '2022',
    featured: false,
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'A comprehensive LMS with course creation, student enrollment, progress tracking, and assessment tools.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Shadcn/ui'],
    githubUrl: 'https://github.com/johndoe/lms-platform',
    demoUrl: 'https://lms-demo.vercel.app',
    date: '2022',
    featured: true,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, Framer Motion, and Tailwind CSS.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/johndoe/portfolio',
    demoUrl: 'https://johndoe.dev',
    date: '2024',
    featured: false,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              My <span className="text-primary">Projects</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Here's a collection of projects I've worked on, showcasing my skills
              in full-stack development, UI/UX design, and problem-solving.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardFooter className="gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Other Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full group hover:shadow-md transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <div className="text-xs text-muted-foreground">{project.date}</div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardFooter className="gap-2">
                    <Button asChild variant="ghost" size="sm" className="flex-1">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="flex-1">
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or just chatting about technology.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Let's Talk
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}