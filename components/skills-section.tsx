const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "HTML5", "CSS3"],
  },
  {
    title: "Styling & Design",
    skills: ["Tailwind CSS", "CSS Modules", "Sass/SCSS", "Styled Components", "Responsive Design"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Vite", "Webpack", "npm/yarn"],
  },
  {
    title: "Concepts & Practices",
    skills: ["REST APIs", "GraphQL", "Accessibility (a11y)", "SEO", "Performance Optimization"],
  },
];

const expertise = [
  { name: "Frontend Development", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "UI/UX Implementation", level: 88 },
  { name: "Responsive Design", level: 92 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-32 lg:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Skills
        </span>

        <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {/* Expertise Bars */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-8">Expertise</h3>
            <div className="space-y-6">
              {expertise.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Categories */}
          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-foreground text-sm rounded-full transition-all hover:bg-foreground hover:text-background cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="mt-24 overflow-hidden border-t border-b border-border py-8">
          <div className="flex gap-12 animate-marquee">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Vue.js",
              "HTML5",
              "CSS3",
              "Git",
              "Vercel",
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Vue.js",
            ].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap text-5xl font-bold text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
