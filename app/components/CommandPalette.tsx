"use client";

import { useEffect, useState, useCallback } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { navSections, contactInfo } from "@/app/lib/data";
import {
  Home,
  User,
  FolderGit,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  FileText,
  Command,
  ArrowRight,
  ExternalLink,
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
  ExternalLink,
  FileText,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(contactInfo.email);
    toast.success("Email copied to clipboard");
    setOpen(false);
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
      label: "Open LinkedIn",
      icon: ExternalLink,
      action: () => window.open(contactInfo.linkedin, "_blank"),
    },
    {
      id: "github",
      label: "Open GitHub",
      icon: Code2,
      action: () => window.open(contactInfo.github, "_blank"),
    },
    {
      id: "resume",
      label: "Download Resume",
      icon: FileText,
      action: () => window.open(contactInfo.resumeUrl, "_blank"),
    },
  ];

  return (
    <>
      {/* Command palette trigger hint */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-sm hover:text-foreground hover:border-primary/50 transition-colors"
      >
        <Command className="w-4 h-4" />
        <span>Command Menu</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted text-xs font-mono">
          <span>⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            {navSections.map((section) => {
              const Icon = iconMap[section.label] || ArrowRight;
              return (
                <CommandItem
                  key={section.id}
                  onSelect={() => scrollToSection(section.id)}
                  className="cursor-pointer"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{section.label}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    ⌘{section.shortcut}
                  </span>
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            {actions.map((action) => (
              <CommandItem
                key={action.id}
                onSelect={action.action}
                className="cursor-pointer"
              >
                <action.icon className="mr-2 h-4 w-4" />
                <span>{action.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
