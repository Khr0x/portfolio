import { ArrowRight, Download } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12 items-center">
        {/* Text Content - Left */}
        <div className="lg:col-span-2 text-white space-y-6">
          <p className="text-lg text-white/70 font-light">
            Hola, soy
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-primary">Cristian Mendez</span>
            <br />
            <span className="text-white/80 text-4xl md:text-5xl font-semibold">
              Desarrollador Full Stack
            </span>
          </h1>

          <p className="text-white/60 leading-relaxed max-w-2xl text-lg">
            Construyendo aplicaciones web modernas y escalables con tecnologías de vanguardia. Especializado en React, Next.js, Node.js y arquitectura en la nube.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              className="bg-primary text-[#0A0A0A] hover:bg-primary/90 font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-primary/20"
              asChild
            >
              <a href="#contact">
                Contrátame
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button
              variant="ghost"
              className="bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base border border-white/10"
              asChild
            >
              <a href="/cv.pdf" target="_blank" className="flex items-center gap-2">
                Descargar CV
                <Download size={18} />
              </a>
            </Button>
          </div>
        </div>


        {/* Stats Cards - Right */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="bg-white/5 backdrop-blur-xl border-white/20 p-8 hover:bg-white/10 hover:border-primary/30 transition-all shadow-lg">
            <div className="text-5xl font-extrabold text-primary mb-2">6+</div>
            <div className="text-white/70 font-medium">Años de Experiencia</div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border-white/20 p-8 hover:bg-white/10 hover:border-primary/30 transition-all shadow-lg">
            <div className="text-5xl font-extrabold text-primary mb-2">50+</div>
            <div className="text-white/70 font-medium">Proyectos Completados</div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border-white/20 p-8 hover:bg-white/10 hover:border-primary/30 transition-all shadow-lg">
            <div className="text-5xl font-extrabold text-primary mb-2">100%</div>
            <div className="text-white/70 font-medium">Satisfacción del Cliente</div>
          </Card>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-full opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-40" />
    </section>
  );
}