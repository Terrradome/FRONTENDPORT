import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "conceptsandcontexts@gmail.com",
    href: "mailto:conceptsandcontexts@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/elpresidentey",
    href: "https://github.com/elpresidentey",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/iduwe-leonard",
    href: "https://linkedin.com/in/iduwe-leonard-a84905227",
    icon: Linkedin,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-32 lg:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Contact
        </span>

        <div className="mt-8 grid gap-16 lg:grid-cols-2">
          {/* CTA */}
          <div>
            <h2 className="text-4xl font-bold text-foreground lg:text-5xl text-balance">
              Let's work together
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              I'm currently open to new opportunities and interesting projects.
              If you have a question or just want to say hi, I'd love to hear from you.
            </p>

            <Link
              href="mailto:conceptsandcontexts@gmail.com"
              className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-foreground/90 group"
            >
              Say hello
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between p-6 border border-border rounded-2xl transition-all hover:border-foreground/20 hover:bg-secondary/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{link.label}</div>
                    <div className="font-medium text-foreground">{link.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-border">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              Designed & built by Iduwe Ekene Leonard
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
