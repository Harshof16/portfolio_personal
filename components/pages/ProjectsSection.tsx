"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Calendar, Eye, Ban, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "AI Travel Planner",
    description:
      "AI-based travel app that generates personalized itineraries using OpenAI, with real-time updates via Socket.io and state management via Zustand.",
    image: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "Zustand",
      "Socket.io",
    ],
    githubUrl: "https://github.com/Harshof16/Travel_planner_AI",
    demoUrl: "https://project-travel-main2.vercel.app/",
    date: "2025",
    featured: true,
  },
  {
    id: 13,
    title: "Noteflow AI Assistant",
    description:
      "Document processing AI with semantic search, memory management, image support, and LangChain vector embeddings.",
    image: "https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg",
    technologies: [
      "JavaScript",
      "LangChain",
      "Vector Embeddings",
      "OpenAI API",
      "Document Processing",
    ],
    githubUrl: "https://github.com/Harshof16/noteflow_rag",
    demoUrl: "https://noteflow-rag.vercel.app/",
    date: "2025",
    featured: true,
  },
  {
    id: 3,
    title: "Catalyst Dashboard",
    description:
      "Built interactive dashboards with complex charts and real-time visualizations for AI-powered apps using React, Plotly, and Chart.js.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    technologies: [
      "React",
      "TypeScript",
      "Canvas",
      "Chart.js",
      "Plotly",
      "Vitest",
      "Storybook",
    ],
    githubUrl: null,
    demoUrl: null,
    date: "2024",
    featured: true,
  },
  // Tier 1: Both GitHub + Live Demo (Trending Projects)
  {
    id: 9,
    title: "Thumbnail Maker with Nanobanana",
    description:
      "Automated thumbnail generation using nanobanana with batch processing for creators.",
    image: "https://images.pexels.com/photos/265464/pexels-photo-265464.jpeg",
    technologies: [
      "TypeScript",
      'Tailwind CSS',
      "Gemini Image model",
      "Batch Processing",
    ],
    githubUrl: "https://github.com/Harshof16/thumbnail_maker_nanobanana",
    demoUrl: "https://thumbnail-maker-nanobanana.vercel.app/",
    date: "2025",
    featured: true,
  },
  {
    id: 10,
    title: "Website Cloner CLI (Mini Cursor)",
    description:
      "Built CLI for automated website cloning with AI customization, self-consistency validation, and adaptive code generation.",
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    technologies: [
      "Node.js",
      "TypeScript",
      "Puppeteer",
      "Cheerio",
      "Web Scraping",
      "CLI Development",
    ],
    githubUrl: "https://github.com/Harshof16/agent-cloneWebsite",
    demoUrl: null,
    date: "2025",
    featured: true,
  },  
  // Tier 2: GitHub Only (Trending Projects)
  {
    id: 11,
    title: "Browser Automation Agent (Mini Comet)",
    description:
      "Intelligent browser automation using Playwright with multi-step reasoning, guardrails, and human-in-the-loop validation.",
    image: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg",
    technologies: [
      "TypeScript",
      "Playwright",
      "OpenAI Agent SDK",
      "Browser Automation",
    ],
    githubUrl: "https://github.com/Harshof16/WebAutomation-Agent",
    demoUrl: null,
    date: "2025",
    featured: true,
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "Developed a scalable e-commerce app with secure payments via Stripe, product management, and responsive UI using Tailwind CSS.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Redux Toolkit",
    ],
    githubUrl: null,
    demoUrl: null,
    date: "2023",
    featured: true,
  },
  {
    id: 2,
    title: "AI Persona Chatbot",
    description:
      "Persona-based AI chatbot with few-shot prompting, markdown rendering, and timestamps.",
    image: "https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg",
    technologies: [
      "Next.js",
      "Socket.io",
      "OpenAI API",
      "TailwindCSS",
      "Gemini"
    ],
    githubUrl: "https://github.com/Harshof16/Persona-AI-Chatbot",
    demoUrl: "https://persona-ai-chatbot.vercel.app/",
    date: "2025",
    featured: true,
  },
  {
    id: 12,
    title: "Real-Time Conversational Voice Agent",
    description:
      "Real-time conversational voice agents using WebRTC and OpenAI API with memory.",
    image: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
    technologies: [
      "WebRTC",
      "OpenAI Realtime API",
      "Voice Processing",
      "Real-time Communication",
    ],
    githubUrl: null,
    demoUrl: null,
    date: "2025",
    featured: true,
  },
  {
    id: 8,
    title: "RAG on VTT for Udemy | Advanced RAG System",
    description:
      "Advanced RAG system for video transcripts with corrective RAG and Qdrant.",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    technologies: [
      "TypeScript",
      "LangChain",
      "Qdrant",
      "OpenAI API",
      "Advanced RAG Techniques",
    ],
    githubUrl: "https://github.com/Harshof16/rag-vtt-udemy",
    demoUrl: null,
    date: "2025",
    featured: false,
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, Framer Motion, and Tailwind CSS.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/johndoe/portfolio",
    demoUrl: "https://johndoe.dev",
    date: "2024",
    featured: false,
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      setShowTopFade(scrollTop > 10);
      setShowBottomFade(scrollHeight - (scrollTop + clientHeight) > 10);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
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
            Here&apos;s a collection of projects I&apos;ve worked on, showcasing
            my skills in full-stack development, UI/UX design, and
            problem-solving.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Top Fade Overlay */}
        <div
          className={`absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            showTopFade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="max-h-[750px] overflow-y-auto scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
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
                        {/* Demo Button */}
                        {project.demoUrl ? (
                          <Button
                            asChild
                            size="sm"
                            variant="secondary"
                            className="bg-black/80 text-white border-0 hover:bg-black/90"
                            aria-label={`View demo of ${project.title}`}
                          >
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cta="demo"
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-black/50 text-white border-0 cursor-not-allowed opacity-60"
                            disabled
                          >
                            <EyeOff className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        )}

                        {/* GitHub Button */}
                        {project.githubUrl ? (
                          <Button
                            asChild
                            size="sm"
                            variant="secondary"
                            className="bg-black/80 text-white border-0 hover:bg-black/90"
                            aria-label={`View code of ${project.title}`}
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cta="code"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-black/50 text-white border-0 cursor-not-allowed opacity-60"
                            disabled
                          >
                            <Ban className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-3 pb-3 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-primary">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 10).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted text-foreground border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 10 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 10}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardFooter className="gap-2 pt-0 mt-auto">
                    {/* GitHub Button */}
                    {project.githubUrl ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent border-border hover:bg-accent"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="flex-1 bg-transparent border-border cursor-not-allowed opacity-60"
                      >
                        <Ban className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}

                    {/* Demo Button */}
                    {project.demoUrl ? (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="flex-1 bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                      >
                        <EyeOff className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Fade Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            showBottomFade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <Button
            asChild
            variant="outline"
            className="text-primary border-primary hover:bg-primary hover:text-white dark:hover:text-black 
                hover:shadow-lg hover:shadow-primary/40 
                 dark:hover:shadow-primary/50  
                 transition-all duration-300"
          >
            <a
              href="https://github.com/Harshof16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Add custom scrollbar styling for hidden scrollbars
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;
  if (!document.querySelector("style[data-scrollbar-hide]")) {
    style.setAttribute("data-scrollbar-hide", "true");
    document.head.appendChild(style);
  }
}
