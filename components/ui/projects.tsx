import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Button } from "./button";

const projects = [
  {
    title: "E-Commerce Platform",
    eyebrow: "Comercio digital",
    description:
      "Arquitectura completa para ventas en linea con checkout, inventario, panel administrativo y flujos de pago listos para escalar.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    github: "#",
    live: "#",
    impact: "Checkout optimizado",
    stat: "99.9%",
    statLabel: "uptime esperado",
    icon: ShieldCheck,
    featured: true,
  },
  {
    title: "Task Management App",
    eyebrow: "Productividad",
    description:
      "Tablero colaborativo con drag and drop, actualizaciones en tiempo real, filtros por prioridad y notificaciones de avance.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
    impact: "Colaboracion en vivo",
    stat: "4",
    statLabel: "vistas clave",
    icon: Layers3,
  },
  {
    title: "AI Content Generator",
    eyebrow: "Automatizacion",
    description:
      "Generador de contenido asistido por IA con prompts reutilizables, historial de resultados y dashboard analitico.",
    tags: ["Next.js", "OpenAI", "TailwindCSS", "Vercel"],
    github: "#",
    live: "#",
    impact: "Flujos con IA",
    stat: "3x",
    statLabel: "produccion",
    icon: Sparkles,
  },
];

function ProjectPreview({ featured = false }: { featured?: boolean }) {
  return (
    <div className="relative flex h-full min-h-56 flex-col justify-between overflow-hidden bg-[#101313] p-5">
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div className="space-y-3">
          <div className="h-3 w-24 rounded-full bg-white/20" />
          <div className="h-3 w-36 rounded-full bg-primary/80" />
        </div>
        <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/15">
          <LineChart size={20} className="text-primary" />
        </div>
      </div>

      <div className={featured ? "mt-8 grid grid-cols-3 gap-3" : "mt-8 space-y-3"}>
        <div className="rounded-lg border border-white/10 bg-white/8 p-3">
          <div className="mb-4 h-2 w-16 rounded-full bg-white/20" />
          <div className="h-10 rounded-md bg-primary/25" />
        </div>
        <div className="rounded-lg border border-white/10 bg-white/8 p-3">
          <div className="mb-4 h-2 w-12 rounded-full bg-white/20" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 rounded-md bg-white/15" />
            <div className="h-10 rounded-md bg-primary/30" />
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/8 p-3">
          <div className="mb-4 h-2 w-20 rounded-full bg-white/20" />
          <div className="space-y-2">
            <div className="h-2 rounded-full bg-primary/60" />
            <div className="h-2 w-4/5 rounded-full bg-white/15" />
            <div className="h-2 w-3/5 rounded-full bg-white/15" />
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
        <div>
          <div className="text-2xl font-extrabold text-white">{featured ? "$42k" : "18k"}</div>
          <div className="text-xs font-medium text-white/45">{featured ? "volumen mensual" : "eventos"}</div>
        </div>
        <div className="h-12 w-28 rounded-md bg-linear-to-r from-primary/80 to-white/25" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
              PROYECTOS
            </span>
            <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              Trabajos destacados
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Soluciones enfocadas en producto: interfaces claras, integraciones confiables y bases tecnicas pensadas para crecer.
            </p>
          </div>

          <Button
            className="w-fit rounded-full border border-white/20 bg-white/10 px-6 py-5 font-semibold text-white hover:bg-white/20"
            asChild
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              Ver GitHub <ArrowUpRight size={17} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-6">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={
                  project.featured
                    ? "group grid overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/8 lg:col-span-6 lg:grid-cols-[1.12fr_0.88fr]"
                    : "group overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/8 lg:col-span-3"
                }
              >
                <div className={project.featured ? "min-h-80 lg:order-2" : "h-64"}>
                  <ProjectPreview featured={project.featured} />
                </div>

                <div className="flex min-h-full flex-col p-6 md:p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                          {project.eyebrow}
                        </p>
                        <p className="mt-1 text-sm font-medium text-white/45">{project.impact}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold text-white">{project.stat}</div>
                      <div className="text-xs font-medium text-white/45">{project.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white transition-colors group-hover:text-primary md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3 border-t border-white/10 pt-6">
                    <Link
                      href={project.github}
                      className="inline-flex items-center gap-2 rounded-full px-1 text-sm font-semibold text-white/60 transition-colors hover:text-primary"
                    >
                      <Github size={17} /> Código
                    </Link>
                    <Link
                      href={project.live}
                      className="inline-flex items-center gap-2 rounded-full px-1 text-sm font-semibold text-white/60 transition-colors hover:text-primary"
                    >
                      <ExternalLink size={17} /> Demo
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
