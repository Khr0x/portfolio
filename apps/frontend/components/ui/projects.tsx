import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos con Stripe y panel de administración.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    image: "🛒",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "📋",
    github: "#",
    live: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Generador de contenido con inteligencia artificial, integración con OpenAI y dashboard analítico.",
    tags: ["Next.js", "OpenAI", "TailwindCSS", "Vercel"],
    image: "🤖",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary bg-secondary px-4 py-1.5 rounded-full">
            PROYECTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-6">
            Trabajo destacado
          </h2>
          <p className="text-text-primary/50 mt-4 max-w-2xl mx-auto text-lg">
            Una selección de proyectos que demuestran mis habilidades y pasión
            por el desarrollo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card-bg rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-linear-to-br from-secondary to-secondary/80 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-primary/50 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold bg-primary/15 text-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-text-primary/60 hover:text-secondary transition-colors"
                  >
                    <Github size={16} /> Código
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium text-text-primary/60 hover:text-secondary transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}