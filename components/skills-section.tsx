const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Vue.js"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "CSS Modules", "Sass/SCSS", "Styled Components"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Vite", "Webpack", "npm/yarn"],
  },
];

export function SkillsSection() {
  return (
    <section className="px-6 py-32 lg:px-12 scroll-mt-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24">
          {/* Left - Section Label */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest sticky top-32">
              Skills
            </h2>
          </div>

          {/* Right - Content */}
          <div className="grid sm:grid-cols-2 gap-12">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
