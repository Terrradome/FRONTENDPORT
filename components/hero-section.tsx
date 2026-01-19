"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { LiveStatus } from "./live-status";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/elpresidentey",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/iduwe-leonard-a84905227",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:conceptsandcontexts@gmail.com",
    icon: Mail,
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Top Bar - Location, Time & Weather */}
      <div className="w-full px-6 py-3 lg:px-12 border-b border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <LiveStatus />
          <div className="hidden sm:flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                aria-label={link.name}
              >
                <link.icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="w-full px-6 py-5 lg:px-12">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
            IEL
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-foreground/90"
          >
            Let's talk
          </Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center px-6 lg:px-12 pb-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            {/* Status */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-muted-foreground">Available for work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance leading-[1.1]">
              Frontend Engineer crafting digital experiences
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm Iduwe Ekene Leonard, a developer focused on building accessible, 
              performant web applications with clean code and thoughtful design.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium transition-all hover:bg-foreground/90"
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium text-foreground transition-all hover:bg-secondary"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
