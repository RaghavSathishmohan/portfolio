"use client";

import { motion } from "framer-motion";
import { education } from "@/app/lib/data";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { GradientText } from "@/app/components/GradientText";
import { GlowCard } from "@/app/components/GlowCard";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education" className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{`> EDUCATION`}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Academic <GradientText>Foundation</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Computer Science at Rutgers University
          </p>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlowCard className="p-8" glowColor="rgba(99, 102, 241, 0.2)">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{education.school}</h3>
                    <p className="text-primary">{education.degree}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Expected {education.expectedGraduation}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {education.location}
                </Badge>
              </div>
            </div>

            {/* Coursework */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="font-medium">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-sm rounded-full bg-muted border border-border text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-primary" />
                <h4 className="font-medium">Certifications</h4>
              </div>
              <div className="space-y-2">
                {education.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
                  >
                    <span className="font-medium">{cert.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
