"use client";

import About from '@/components/pages/AboutSection';
import Projects from '@/components/pages/ProjectsSection';
import Contact from '@/components/contact';
import Hero from '@/components/pages/HeroSection';

export default function Home() {
  return (
    <div className='pt-10'>
      <section id="home">
        <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}