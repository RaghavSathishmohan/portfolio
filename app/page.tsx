"use client";

import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { NavDropdown } from "@/app/components/NavDropdown";

import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Projects } from "@/app/sections/Projects";
import { Services } from "@/app/sections/Services";
import { Experience } from "@/app/sections/Experience";
import { Skills } from "@/app/sections/Skills";
import { Education } from "@/app/sections/Education";
import { GitHubSection } from "@/app/sections/GitHubSection";
import { Contact } from "@/app/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Background */}
      <AnimatedBackground />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Navigation Dropdown */}
      <NavDropdown />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Skills />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
    </>
  );
}
