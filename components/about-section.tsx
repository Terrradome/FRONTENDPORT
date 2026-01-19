import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experience = [
  {
    period: "2023 — Present",
    role: "Frontend Engineer",
    company: "Freelance",
    description: "Building responsive, accessible web applications for various clients using React, Next.js, and TypeScript. Focus on performance optimization and clean code architecture.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "Various Projects",
    description: "Developed multiple production-ready applications including e-commerce platforms and travel applications. Collaborated with designers to implement pixel-perfect interfaces.",
    skills: ["Vue.js", "JavaScript", "CSS3", "REST APIs"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-32 lg:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24">
          {/* Left - Section Label */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest sticky top-32">
              Experience
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <article key={index} className="group relative">
                <div className="grid sm:grid-cols-[140px,1fr] gap-4">
                  {/* Period */}
                  <div className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-foreground font-medium">
                        {exp.role} · {exp.company}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-foreground bg-secondary px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Resume Link */}
            <div className="pt-8">
              <Link
                href="/resume.pdf"
                className="group inline-flex items-center gap-2 text-foreground font-medium"
              >
                View Full Resume
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
