"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navSections, contactInfo, personalInfo } from "@/app/lib/data";
import {
  Home,
  User,
  FolderGit,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  Menu,
  X,
  ExternalLink,
  FileText,
} from "lucide-react";
import { toast } from "sonner";

const iconMap: { [key: string]: React.ElementType } = {
  Home,
  User,
  FolderGit,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
};

export function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(contactInfo.email);
    toast.success("Email copied to clipboard");
    setIsOpen(false);
  }, []);

  const actions = [
    {
      id: "copy-email",
      label: "Copy Email",
      icon: Mail,
      action: copyEmail,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: ExternalLink,
      action: () => window.open(contactInfo.linkedin, "_blank"),
    },
    {
      id: "github",
      label: "GitHub",
      icon: Code2,
      action: () => window.open(contactInfo.github, "_blank"),
    },
    {
      id: "resume",
      label: "Resume",
      icon: FileText,
      action: () => window.open(contactInfo.resumeUrl, "_blank"),
    },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 text-foreground shadow-lg hover:border-primary/50 hover:bg-card transition-all"
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-sm font-medium hidden sm:inline">Menu</span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/20 backdrop-blur-sm z-40"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 w-64 rounded-xl bg-card/95 backdrop-blur-md border border-border/50 shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="px-4 py-3 border-b border-border/50 bg-muted/30">
                <p className="text-sm font-semibold text-foreground">
                  {personalInfo.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {personalInfo.title}
                </p>
              </div>

              {/* Navigation Section */}
              <div className="py-2">
                <p className="px-4 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Navigate
                </p>
                {navSections.map((section) => {
                  const Icon = iconMap[section.label] || Code2;
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-left"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span>{section.label}</span>
                      <span className="ml-auto text-xs text-muted-foreground font-mono">
                        {section.shortcut}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="border-t border-border/50" />

              {/* Actions Section */}
              <div className="py-2">
                <p className="px-4 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Quick Actions
                </p>
                {actions.map((action) => (
                  <motion.button
                    key={action.id}
                    onClick={action.action}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-left"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <action.icon className="w-4 h-4 text-muted-foreground" />
                    <span>{action.label}</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground/50" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
