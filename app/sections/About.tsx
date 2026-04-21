"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/app/lib/data";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { GradientText } from "@/app/components/GradientText";
import { GlowCard } from "@/app/components/GlowCard";
import { Code2, Users, TrendingUp, Rocket } from "lucide-react";

const icons = [Rocket, Users, TrendingUp, Code2];

export function About() {
  return (
    <SectionWrapper id="about" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{`> ABOUT_ME`}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Founder-<GradientText>Engineer</GradientText> Mindset
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging technical depth with operational execution
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-xl font-medium text-foreground">
              {aboutContent.headline}
            </p>

            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-6 flex flex-wrap gap-3">
              {["Python", "SQL", "AI/ML", "Analytics", "Leadership"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-muted border border-border text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutContent.stats.map((stat, index) => {
              const Icon = icons[index];
              return (
                <GlowCard
                  key={stat.label}
                  className="p-6 text-center"
                  hover
                  glowColor={`rgba(${index % 2 === 0 ? "0, 212, 170" : "99, 102, 241"}, 0.2)`}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
