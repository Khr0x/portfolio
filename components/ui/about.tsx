import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const stats = [
  { icon: Code2, value: "6+", label: "Años de Experiencia" },
  { icon: Rocket, value: "50+", label: "Proyectos Completados" },
  { icon: Users, value: "100%", label: "Satisfacción del Cliente" },
  { icon: Palette, value: "15+", label: "Tecnologías Dominadas" },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            SOBRE MÍ
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6">
            Conoce más sobre mí
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            Soy un desarrollador apasionado enfocado en tecnología y diseño.
            Me especializo en crear soluciones digitales que generan impacto.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-white/70 leading-relaxed text-lg">
              Con más de 6 años de experiencia en desarrollo web, me he
              especializado en construir aplicaciones modernas utilizando las
              últimas tecnologías del ecosistema JavaScript.
            </p>
            <p className="text-white/70 leading-relaxed text-lg">
              Mi enfoque combina código limpio, rendimiento óptimo y un
              diseño centrado en el usuario. Creo firmemente que la mejor tecnología es
              aquella que resuelve problemas reales.
            </p>
            <Button
              className="bg-primary text-[#0A0A0A] hover:bg-primary/90 font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-primary/20"
              asChild
            >
              <a href="#contact">
                Trabajemos juntos →
              </a>
            </Button>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="bg-white/5 backdrop-blur-xl border-white/20 p-6 hover:bg-white/10 hover:border-primary/30 transition-all shadow-lg group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <p className="text-3xl font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-white/70 mt-1 font-medium">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-full opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-40" />
    </section>
  );
}