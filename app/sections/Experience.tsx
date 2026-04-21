"use client";

import { motion } from "framer-motion";
import { experience } from "@/app/lib/data";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { GradientText } from "@/app/components/GradientText";
import { GlowCard } from "@/app/components/GlowCard";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Calendar,
  MapPin,
  Rocket,
  Users,
  ChevronRight,
} from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{`> EXPERIENCE`}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>Leadership</GradientText> & Operations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building teams, optimizing systems, and delivering results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experience.map((job, index) => {
            const Icon = job.type === "founder" ? Rocket : Users;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-0 ${
                  index !== experience.length - 1 ? "md:pb-12" : ""
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10`}
                >
                  <Icon className="w-4 h-4 text-primary" />
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 ${
                    isLeft
                      ? "md:mr-[calc(50%+2rem)] md:text-right"
                      : "md:ml-[calc(50%+2rem)]"
                  }`}
                >
                  <GlowCard className="p-6" hover>
                    {/* Header */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <Badge
                        variant="outline"
                        className={
                          job.type === "founder"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : ""
                        }
                      >
                        {job.type === "founder" ? "Founder" : "Operations"}
                      </Badge>
                      <span className="text-muted-foreground text-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {job.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                    <div
                      className={`flex items-center gap-2 text-muted-foreground mb-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span>{job.company}</span>
                      {job.location && (
                        <>
                          <span className="text-border">|</span>
                          <MapPin className="w-3 h-3" />
                          <span className="text-sm">{job.location}</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {job.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {job.highlights.slice(0, 3).map((highlight, i) => (
                        <li
                          key={i}
                          className={`text-sm text-muted-foreground flex items-start gap-2 ${
                            isLeft ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
