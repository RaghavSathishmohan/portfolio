"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { GlowCard } from "@/app/components/GlowCard";
import { Mail, Code2, Layout, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Websites that actually work. Clean code, fast loading, mobile-friendly. From landing pages to full-stack apps with auth and databases.",
    price: "$500–1,500",
    note: "Standard sites",
  },
  {
    icon: Layout,
    title: "Application Development",
    description:
      "Custom software for your specific problem. Multi-tenant platforms, analytics dashboards, automation tools, inventory systems.",
    price: "$3,000+",
    note: "Contact for exact scope",
  },
  {
    icon: Sparkles,
    title: "Web Design",
    description:
      "Functional, professional design that doesn't frustrate users. Clear navigation, fast performance, layouts that work everywhere.",
    price: "Included",
    note: "With development, or $25–40/hour standalone",
  },
];

const reasons = [
  {
    title: "Real Technical Skills",
    description:
      "I don't just design — I build. Multi-tenant architecture, databases, authentication. I've shipped production code.",
  },
  {
    title: "Operations Background",
    description:
      "Led teams of 10-15 people before learning to code. I understand business needs, not just technical specs.",
  },
  {
    title: "Data-Driven",
    description:
      "Google Data Analytics certified. I build systems that track metrics and help you make better decisions.",
  },
];

export function Services() {
  return (
    <SectionWrapper id="services" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{`> SERVICES`}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            I build things that <span className="text-gradient">work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Websites, apps, and tools. Clean code, fast loading, mobile-friendly.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="h-full p-6" hover>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-primary font-semibold">{service.price}</p>
                  <p className="text-xs text-muted-foreground">{service.note}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Why me section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Why Work With Me</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-semibold mb-2">{reason.title}</h4>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <GlowCard className="p-8 inline-block" glowColor="rgba(212, 165, 116, 0.2)">
            <h3 className="text-xl font-bold mb-2">Not sure what you need?</h3>
            <p className="text-muted-foreground mb-4">Email me and we'll figure it out.</p>
            <a
              href="mailto:raghavsathishmohan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              raghavsathishmohan@gmail.com
            </a>
          </GlowCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
