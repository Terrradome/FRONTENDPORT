import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Audiophile E-commerce",
    description:
      "A fully responsive e-commerce platform for premium audio equipment. Features product filtering, cart functionality with localStorage persistence, and a complete checkout flow with form validation.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/elpresidentey/HNGaudiophilereplica",
    demo: null,
    year: "2024",
  },
  {
    title: "DIASPORAN Travel App",
    description:
      "A travel application designed to help users discover destinations, plan trips, and explore cultural experiences worldwide. Built with a focus on intuitive navigation and rich visual content.",
    techStack: ["React", "JavaScript", "CSS", "REST APIs"],
    github: "https://github.com/elpresidentey/DIASPORAN",
    demo: null,
    year: "2023",
  },
  {
    title: "HNG TicketMaster",
    description:
      "A modern ticketing platform allowing users to browse events, select seats, and purchase tickets. Implemented with Vue.js for reactive UI updates and smooth user interactions.",
    techStack: ["Vue.js", "JavaScript", "CSS3", "GitHub Pages"],
    github: null,
    demo: "https://elpresidentey.github.io/HNGTICKETMASTERVUE/",
    year: "2023",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-32 lg:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24">
          {/* Left - Section Label */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest sticky top-32">
              Projects
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-24">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const mainLink = project.demo || project.github;

  return (
    <article className="group">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
              {mainLink ? (
                <Link
                  href={mainLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-sm text-muted-foreground font-mono mt-1">{project.year}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`View ${project.title} live demo`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-foreground bg-secondary px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
