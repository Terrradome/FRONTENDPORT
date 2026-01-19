import type React from "react";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";

export function CaseStudySection() {
  return (
    <section className="px-6 py-32 lg:px-12 scroll-mt-20 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <span className="text-sm font-medium text-background/60 uppercase tracking-widest">
          Case Study
        </span>

        <article className="mt-8">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-4xl font-bold text-background lg:text-5xl">
                Audiophile E-commerce
              </h2>
              <p className="mt-4 text-xl text-background/70">
                Building a production-ready e-commerce experience from the ground up
              </p>
            </div>
            <Link
              href="https://github.com/elpresidentey/HNGaudiophilereplica"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 border border-background/20 bg-background/10 px-5 py-3 rounded-full text-sm font-medium text-background transition-all hover:bg-background hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              View Source
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Overview */}
          <div className="mt-16 border-t border-background/10 pt-16">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-sm font-semibold text-background/60 uppercase tracking-wider mb-4">
                  Overview
                </h3>
                <p className="text-lg text-background/80 leading-relaxed">
                  The Audiophile E-commerce project was built as a comprehensive
                  demonstration of modern frontend development practices. The goal
                  was to create a fully functional e-commerce platform that could
                  serve as a production-ready template, showcasing best practices in
                  React development, state management, and responsive design.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-background/60 uppercase tracking-wider mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-background/20 rounded-full text-sm text-background/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-3 gap-6">
            <MetricCard value="90+" label="Lighthouse Score" />
            <MetricCard value="< 2s" label="Load Time" />
            <MetricCard value="100%" label="Responsive" />
          </div>

          {/* Key Decisions */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="border border-background/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-background mb-6">
                Technical Decisions
              </h3>
              <ul className="space-y-4">
                <DecisionItem title="Next.js App Router">
                  Server-side rendering for optimal performance and SEO
                </DecisionItem>
                <DecisionItem title="TypeScript">
                  Full type safety reducing runtime errors significantly
                </DecisionItem>
                <DecisionItem title="Component Architecture">
                  Modular design following atomic design principles
                </DecisionItem>
              </ul>
            </div>

            <div className="border border-background/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-background mb-6">
                UX Considerations
              </h3>
              <ul className="space-y-4">
                <DecisionItem title="Accessibility">
                  ARIA labels, keyboard navigation, proper heading hierarchy
                </DecisionItem>
                <DecisionItem title="Visual Feedback">
                  Smooth transitions and loading states for all interactions
                </DecisionItem>
                <DecisionItem title="Error Handling">
                  User-friendly messages and graceful degradation
                </DecisionItem>
              </ul>
            </div>
          </div>

          {/* Learnings */}
          <div className="mt-16 border-t border-background/10 pt-16">
            <h3 className="text-sm font-semibold text-background/60 uppercase tracking-wider mb-8">
              Key Learnings
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <LearningCard
                number="01"
                title="Start with data"
                description="Defining data structures early made development smoother and reduced refactoring."
              />
              <LearningCard
                number="02"
                title="Document as you go"
                description="Well-documented components saved time and improved maintainability."
              />
              <LearningCard
                number="03"
                title="Test on real devices"
                description="Real device testing revealed edge cases browser tools missed."
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6 border border-background/10 rounded-2xl">
      <div className="text-4xl font-bold text-background">{value}</div>
      <div className="mt-2 text-sm text-background/60">{label}</div>
    </div>
  );
}

function DecisionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-background/40" />
      <div>
        <span className="font-medium text-background">{title}:</span>{" "}
        <span className="text-background/70">{children}</span>
      </div>
    </li>
  );
}

function LearningCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative p-6">
      <span className="absolute top-0 right-0 text-6xl font-bold text-background/5">
        {number}
      </span>
      <h4 className="font-semibold text-background">{title}</h4>
      <p className="mt-2 text-sm text-background/70 leading-relaxed">{description}</p>
    </div>
  );
}
