"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/app/lib/data";
import { GradientText } from "@/app/components/GradientText";
import { MagneticButton } from "@/app/components/MagneticButton";
import { TerminalText } from "@/app/components/TerminalText";
import {
  ArrowDown,
  FileText,
  Mail,
  ChevronRight,
  Code2,
  ExternalLink,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-accent"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src="/images/profile.jpg"
                alt="Raghav Sathishmohan"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <motion.div
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-background"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">{personalInfo.title}</span>
          <br />
          <GradientText variant="primary">{personalInfo.subtitle}</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Computer Science student at{" "}
          <span className="text-foreground font-medium">Rutgers University</span>{" "}
          building AI-powered systems. Founder of{" "}
          <span className="text-primary font-medium">StorePilot</span>. Data-driven problem solver with leadership experience.
        </motion.p>

        {/* Terminal text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10"
        >
          <TerminalText
            prefix=">"
            className="text-sm text-muted-foreground"
            delay={600}
          >
            Currently building AI-powered inventory management SaaS
          </TerminalText>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#projects"
            variant="primary"
            className="group"
          >
            View Projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <MagneticButton
            href={personalInfo.github}
            target="_blank"
            variant="ghost"
            className="group"
          >
            <Code2 className="w-4 h-4" />
            GitHub
          </MagneticButton>

          <MagneticButton
            href="#contact"
            variant="ghost"
            className="group"
          >
            <Mail className="w-4 h-4" />
            Contact
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            target="_blank"
            variant="ghost"
            className="group"
          >
            <FileText className="w-4 h-4" />
            Resume
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
