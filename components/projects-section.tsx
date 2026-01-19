import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Audiophile E-commerce",
    tagline: "Premium audio equipment store",
    description:
      "A fully responsive e-commerce platform for high-end audio equipment. Features product filtering, cart functionality, and a seamless checkout experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/elpresidentey/HNGaudiophilereplica",
    demo: null,
    featured: true,
  },
  {
    title: "DIASPORAN Travel App",
    tagline: "Travel planning platform",
    description:
      "A travel application designed to help users discover destinations, plan trips, and explore cultural experiences worldwide.",
    techStack: ["React", "JavaScript", "CSS", "REST APIs"],
    github: "https://github.com/elpresidentey/DIASPORAN",
    demo: null,
    featured: false,
  },
  {
    title: "HNG TicketMaster",
    tagline: "Event ticketing application",
    description:
      "A modern ticketing platform built with Vue.js, allowing users to browse events, select seats, and purchase tickets seamlessly.",
    techStack: ["Vue.js", "JavaScript", "CSS3", "GitHub Pages"],
    github: null,
    demo: "https://elpresidentey.github.io/HNGTICKETMASTERVUE/",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-32 lg:px-12 scroll-mt-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Selected Work
        </span>

        <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
          Projects I've built
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          A collection of projects that showcase my skills in frontend development, 
          from e-commerce platforms to interactive applications.
        </p>

        {/* Projects List */}
        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const mainLink = project.demo || project.github;

  return (
    <article className="group relative bg-card border border-border rounded-2xl p-8 lg:p-10 transition-all hover:border-foreground/20 hover:shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        {/* Content */}
        <div className="flex-1 max-w-2xl">
          {/* Number & Featured Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-muted-foreground">
              {String(index).padStart(2, "0")}
            </span>
            {project.featured && (
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
            {project.title}
          </h3>
          
          <p className="mt-1 text-muted-foreground">{project.tagline}</p>

          {/* Description */}
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm text-muted-foreground border border-border px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 lg:flex-col lg:items-end">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">Source</span>
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">Live Demo</span>
            </Link>
          )}
          {mainLink && (
            <Link
              href={mainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-foreground group-hover:text-foreground group-hover:bg-foreground group-hover:text-background"
              aria-label={`View ${project.title}`}
            >
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
