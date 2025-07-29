"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Calendar, Eye } from 'lucide-react';
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
    technologies: ['React', 'Chart.js', 'Weather API', 'Styled Components'],
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
              transition={{ duration: 0.6 }}
            >
              My <span className="text-primary">Projects</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16"
              transition={{ duration: 0.6 }}
            >
              Here&apos;s a collection of projects I&apos;ve worked on, showcasing my skills
              in full-stack development, UI/UX design, and problem-solving.
            </motion.p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-card border border-border shadow-sm hover:shadow-2xl dark:hover:shadow-white/10 transition-all duration-500 rounded-2xl flex flex-col">
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300" />
                    
                    {/* Overlay CTAs */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary" className="bg-black/80 text-white border-0 hover:bg-black/90">
                          <Eye className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-black/80 text-white border-0 hover:bg-black/90">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="space-y-3 pb-3 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-muted text-foreground border-0">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardFooter className="gap-2 pt-0 mt-auto">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent border-border hover:bg-accent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}