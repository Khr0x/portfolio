import { ExternalLink, Github } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

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
    <section id="projects" className="min-h-screen flex items-center justify-center py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            PROYECTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6">
            Trabajo destacado
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            Una selección de proyectos que demuestran mis habilidades y pasión
            por el desarrollo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Código
                  </Link>
                  <Link
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            className="bg-white/10 text-white hover:bg-white/20 border border-white/20 font-semibold px-8 py-6 text-base rounded-full"
            asChild
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              Ver más proyectos →
            </Link>
          </Button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-full opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-40" />
    </section>
  );
}