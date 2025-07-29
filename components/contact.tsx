"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/80 dark:bg-muted/30">
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
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s create something amazing together.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r hover:from-primary hover:to-blue-600 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <Link href="/contact">
              <span className="group flex items-center">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
