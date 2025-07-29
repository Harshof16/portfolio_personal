"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  ArrowRight,
  Code,
  Palette,
  Zap,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ChevronsDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building scalable applications with modern technologies",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user experiences",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring fast, efficient, and accessible applications",
  },
];

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Profile Image */}
          {/* <motion.div
              className="relative w-32 h-32 mx-auto mb-8"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full blur-md opacity-20" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg"
                  alt="Harsh Shukla"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div> */}

          {/* Greeting */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Harsh Shukla
              </span>
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              I&apos;m a{" "}
              <AnimatedText
                texts={[
                  "Full Stack Developer",
                  "React Specialist",
                  "UI/UX Designer",
                  "Problem Solver",
                ]}
                className="text-primary font-semibold"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Passionate about crafting modern, user-centric digital experiences.
            I build scalable web applications that blend clean design with
            robust, high-performance functionality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Button
              size="lg"
              className="group"
              onClick={() => {
                const element = document.querySelector("#projects");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a
                href="/Harsh_Shukla_Resume.pdf"
                download="Harsh_Shukla_Resume.pdf"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-4"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Harshof16",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/harsh-shukla-921566154/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:harshkla09@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronsDown className="w-6 h-6 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
}
