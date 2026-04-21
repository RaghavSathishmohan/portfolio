"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/lib/data";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { GradientText } from "@/app/components/GradientText";
import { GlowCard } from "@/app/components/GlowCard";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  Target,
  Lightbulb,
  Users,
  Code2,
} from "lucide-react";

export function Projects() {
  const featuredProject = projects.find((p) => p.featured);

  return (
    <SectionWrapper id="projects" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{`> FEATURED_PROJECTS`}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>Building</GradientText> Real Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered systems and operational tools I've built
          </p>
        </motion.div>

        {/* Featured Project - StorePilot */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <GlowCard className="overflow-hidden" glowColor="rgba(0, 212, 170, 0.3)">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Featured
                  </Badge>
                  <Badge variant="outline">{featuredProject.status}</Badge>
                  <span className="text-muted-foreground text-sm">
                    {featuredProject.role}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {featuredProject.name}
                </h3>
                <p className="text-lg text-primary mb-4">
                  {featuredProject.tagline}
                </p>
                <p className="text-muted-foreground mb-8 max-w-3xl">
                  {featuredProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                        <Target className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Problem
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {featuredProject.problem}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Lightbulb className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Solution
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {featuredProject.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {featuredProject.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-muted border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {featuredProject.links.github && (
                    <a
                      href={featuredProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium border border-border hover:bg-muted transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {featuredProject.links.demo && (
                    <a
                      href={featuredProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard className="h-full p-6" hover>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="text-muted-foreground text-sm">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-primary text-sm mb-3">{project.tagline}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Code2 className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
