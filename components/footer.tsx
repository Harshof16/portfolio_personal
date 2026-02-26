"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/Harshof16', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/harsh-shukla-921566154/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/HarshShtech', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:harshkla09@gmail.com', icon: Mail, label: 'Email' },
];

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
            >
              Harsh Shukla
            </button>
            <p className="text-muted-foreground max-w-md">
              Full Stack Developer passionate about turning ideas into beautiful, functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Home', id: '#home' },
                { name: 'About', id: '#about' },
                { name: 'Projects', id: '#projects' },
                { name: 'Contact', id: '#contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <span>© 2025 Harsh Shukla. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.div>
              <span>using Next.js & Tailwind CSS</span>
            </div>
            <div className="text-sm text-muted-foreground">
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}