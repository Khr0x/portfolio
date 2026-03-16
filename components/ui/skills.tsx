import { Database, Globe, Server, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    skills: ["Next.js", "React", "TypeScript", "TailwindCSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "SQL"],
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            HABILIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6">
            Tecnologías con las que trabajo
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            Stack tecnológico actualizado para construir aplicaciones modernas y escalables.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-primary/30 transition-all hover:-translate-y-1 shadow-lg group rounded-2xl"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary">{category.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 text-white/70 rounded-full border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-full opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-40" />
    </section>
  );
}