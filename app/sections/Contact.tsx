"use client";

import { motion } from "framer-motion";
import { contactInfo, personalInfo } from "@/app/lib/data";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { GradientText } from "@/app/components/GradientText";
import { MagneticButton } from "@/app/components/MagneticButton";
import { GlowCard } from "@/app/components/GlowCard";
import { toast } from "sonner";
import {
  Mail,
  FileText,
  Copy,
  Check,
  Send,
  MapPin,
  Code2,
  ExternalLink,
} from "lucide-react";

export function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{`> CONTACT`}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s <GradientText>Connect</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in AI, operations, and product engineering
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlowCard className="p-6 h-full" hover glowColor="rgba(0, 212, 170, 0.3)">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    Best way to reach me
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted border border-border">
                <code className="flex-1 text-sm text-foreground">
                  {contactInfo.email}
                </code>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-md hover:bg-muted-foreground/10 transition-colors"
                  aria-label="Copy email"
                >
                  <Copy className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </GlowCard>
          </motion.div>

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlowCard className="p-6 h-full" hover glowColor="rgba(99, 102, 241, 0.2)">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Based in New Jersey
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                {personalInfo.location}
                <br />
                Open to relocation and remote opportunities
              </p>
            </GlowCard>
          </motion.div>
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <GlowCard className="p-8 md:p-12" glowColor="rgba(0, 212, 170, 0.2)">
            <h3 className="text-2xl font-bold mb-4">
              Ready to build something great?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              I&apos;m always interested in discussing AI systems, operations challenges,
              and opportunities to make an impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton
                href={`mailto:${contactInfo.email}`}
                variant="primary"
                className="gap-2"
              >
                <Send className="w-4 h-4" />
                Send Email
              </MagneticButton>
              <MagneticButton
                href={contactInfo.linkedin}
                target="_blank"
                variant="ghost"
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </MagneticButton>
              <MagneticButton
                href={contactInfo.resumeUrl}
                target="_blank"
                variant="ghost"
                className="gap-2"
              >
                <FileText className="w-4 h-4" />
                Resume
              </MagneticButton>
            </div>
          </GlowCard>
        </motion.div>

        {/* Terminal footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 rounded-lg bg-card border border-border">
            <p className="font-mono text-sm">
              <span className="text-primary">$</span>{" "}
              <span className="text-foreground">echo</span>{" "}
              <span className="text-secondary">&quot;Thanks for visiting!&quot;</span>
            </p>
            <p className="font-mono text-sm text-muted-foreground mt-2">
              <span className="text-primary">{`>`}</span> Built with Next.js,
              Tailwind CSS, and lots of ☕
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
