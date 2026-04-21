"use client";

import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { CommandPalette } from "@/app/components/CommandPalette";

import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Projects } from "@/app/sections/Projects";
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

      {/* Command palette */}
      <CommandPalette />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
    </>
  );
}
