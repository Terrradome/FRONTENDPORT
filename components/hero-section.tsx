"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
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
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
            Iduwe Ekene Leonard
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center px-6 lg:px-12 pt-24">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24 items-start py-24">
          {/* Left Column - Identity */}
          <div className="lg:sticky lg:top-32">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Iduwe Ekene Leonard
                </h1>
                <p className="mt-3 text-xl text-muted-foreground">
                  Frontend Engineer
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>

              {/* Status */}
              <div className="flex items-center gap-3 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-muted-foreground">Available for work</span>
              </div>

              {/* Live Status */}
              <div className="pt-4 border-t border-border">
                <LiveStatus />
              </div>

              {/* Navigation Links - Vertical */}
              <nav className="hidden lg:block pt-8 space-y-4" aria-label="In-page navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-4 text-sm"
                  >
                    <span className="h-px w-8 bg-muted-foreground/30 transition-all group-hover:w-16 group-hover:bg-foreground" />
                    <span className="text-muted-foreground uppercase tracking-widest transition-colors group-hover:text-foreground">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-8">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - About Preview */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a developer passionate about crafting accessible, pixel-perfect user 
              interfaces that blend thoughtful design with robust engineering. My favorite 
              work lies at the intersection of design and development, creating experiences 
              that not only look great but are meticulously built for performance and usability.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently focused on building responsive, modern web applications using 
              <span className="text-foreground font-medium"> React</span>, 
              <span className="text-foreground font-medium"> Next.js</span>, and 
              <span className="text-foreground font-medium"> TypeScript</span>. I specialize 
              in translating designs into clean, maintainable code while ensuring excellent 
              user experiences across all devices and browsers.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open source projects, or diving deep into UI/UX best practices to continuously 
              improve my craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
