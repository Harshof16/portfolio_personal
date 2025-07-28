"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowRight, Code, Palette, Zap, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/animated-text';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const features = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building scalable applications with modern technologies"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user experiences"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring fast, efficient, and accessible applications"
  }
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
                I&apos;m a{' '}
                <AnimatedText
                  texts={[
                    'Full Stack Developer',
                    'UI/UX Designer',
                    'React Specialist',
                    'Problem Solver'
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
              Passionate about creating exceptional digital experiences with modern technologies. 
              I build scalable applications that combine beautiful design with robust functionality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6 pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/Harshof16", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-shukla-921566154/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:harshkla09@gmail.com", label: "Email" }
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating modern, scalable applications with a focus on user experience and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-background rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              Ready to work together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s create something amazing together.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}