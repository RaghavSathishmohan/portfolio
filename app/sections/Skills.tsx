"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/lib/data";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { GradientText } from "@/app/components/GradientText";
import { GlowCard } from "@/app/components/GlowCard";
import {
  Code2,
  Brain,
  BarChart3,
  Layers,
  Users,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Code2,
  Brain,
  BarChart3,
  Layers,
  Users,
};

export function Skills() {
  return (
    <SectionWrapper id="skills" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{`> SKILLS`}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <GradientText>&</GradientText> Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Skills across programming, AI, analytics, and operations
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard
                  className="h-full p-6 group"
                  hover
                  glowColor={`${category.color}30`}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: category.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2">{category.category}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-muted border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
