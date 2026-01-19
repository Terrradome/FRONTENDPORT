export function AboutSection() {
  return (
    <section id="about" className="px-6 py-32 lg:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          About
        </span>

        <div className="mt-8 grid gap-16 lg:grid-cols-2">
          {/* Main content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
              A developer passionate about creating exceptional user experiences
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I specialize in building responsive, modern web applications using
                React, Next.js, and TypeScript. My focus is on writing clean,
                maintainable code while ensuring excellent user experiences across
                all devices and browsers.
              </p>

              <p>
                The intersection of design and engineering is where I thrive. 
                I believe the best digital products come from understanding both 
                the technical constraints and the human needs they serve.
              </p>

              <p>
                When I'm not coding, I'm exploring new technologies, contributing 
                to open source, or diving deep into UI/UX best practices to 
                continuously improve my craft.
              </p>
            </div>
          </div>

          {/* Stats & Quick Facts */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="3+" label="Years Experience" />
              <StatCard value="10+" label="Projects Completed" />
              <StatCard value="100%" label="Client Satisfaction" />
              <StatCard value="5+" label="Technologies Mastered" />
            </div>

            {/* Quick Info */}
            <div className="border-t border-border pt-8 space-y-4">
              <InfoRow label="Location" value="Nigeria" />
              <InfoRow label="Focus" value="Frontend Development" />
              <InfoRow label="Status" value="Open to opportunities" highlight />
            </div>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <PhilosophyCard
            title="Clean Code"
            description="Writing readable, maintainable code that other developers can understand and build upon."
          />
          <PhilosophyCard
            title="User First"
            description="Every decision is guided by how it impacts the end user's experience and accessibility."
          />
          <PhilosophyCard
            title="Continuous Growth"
            description="Always learning, experimenting with new technologies, and refining my approach."
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-6 bg-secondary/50 rounded-2xl">
      <div className="text-3xl font-bold text-foreground">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className={highlight ? "font-medium text-emerald-600" : "font-medium text-foreground"}>
        {value}
      </span>
    </div>
  );
}

function PhilosophyCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 border border-border rounded-2xl transition-all hover:border-foreground/20 hover:shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
