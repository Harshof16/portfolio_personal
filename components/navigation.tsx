"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, Mail, FileText } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navItems = [
  { href: '#home', label: 'Home', icon: User },
  { href: '#about', label: 'About', icon: FileText },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(["home", "about", "projects", "contact"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [activeSection]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2"
          >
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shift hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.replace('#', '')
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-md"
                    layoutId="navbar-active"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9"
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm border-t border-border">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center w-full px-3 py-2 text-base font-medium rounded-md transition-colors ${
                          activeSection === item.href.replace('#', '')
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-accent"
                        }`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {item.label}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}