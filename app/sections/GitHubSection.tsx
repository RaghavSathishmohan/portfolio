"use client";

import { motion } from "framer-motion";
import { githubRepos, personalInfo } from "@/app/lib/data";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { GradientText } from "@/app/components/GradientText";
import { GlowCard } from "@/app/components/GlowCard";
import { Button } from "@/components/ui/button";
import {
  Star,
  GitFork,
  ExternalLink,
  Code2,
  Terminal,
} from "lucide-react";

export function GitHubSection() {
  return (
    <SectionWrapper id="github" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{`> GITHUB`}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Open <GradientText>Source</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projects and contributions on GitHub
          </p>
        </motion.div>

        {/* GitHub profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <GlowCard className="p-8" glowColor="rgba(99, 102, 241, 0.2)">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  github.com/raghavmohan
                </h3>
                <p className="text-muted-foreground mb-4">
                  Building AI-powered tools and automation systems
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Code2 className="w-4 h-4" />
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Terminal className="w-4 h-4" />
                    <span>Python</span>
                  </div>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium border border-border hover:bg-muted transition-colors"
              >
                <Code2 className="w-4 h-4" />
                View Profile
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </GlowCard>
        </motion.div>

        {/* Repositories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {githubRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="h-full p-6 group" hover>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {repo.language}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`${personalInfo.github}/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks}
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
