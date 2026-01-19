import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "conceptsandcontexts@gmail.com",
    href: "mailto:conceptsandcontexts@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/elpresidentey",
    href: "https://github.com/elpresidentey",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/iduwe-leonard",
    href: "https://linkedin.com/in/iduwe-leonard-a84905227",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-32 lg:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24">
          {/* Left - Section Label */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest sticky top-32">
              Contact
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently open to new opportunities and interesting projects. 
                Whether you have a question, want to collaborate, or just want to 
                say hi — my inbox is always open.
              </p>

              <Link
                href="mailto:conceptsandcontexts@gmail.com"
                className="inline-flex items-center gap-2 text-foreground font-medium text-lg group"
              >
                conceptsandcontexts@gmail.com
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Links */}
            <div className="space-y-4 pt-8 border-t border-border">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="text-sm uppercase tracking-wider">{link.label}</span>
                  <span className="flex items-center gap-2">
                    <span className="text-foreground">{link.value}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-border">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-sm text-muted-foreground">
            <p>Designed & built by Iduwe Ekene Leonard</p>
            <p>{new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
