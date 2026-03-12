import { Code2, Palette, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "3+", label: "Años de experiencia" },
  { icon: Rocket, value: "20+", label: "Proyectos completados" },
  { icon: Users, value: "15+", label: "Clientes satisfechos" },
  { icon: Palette, value: "100%", label: "Pasión por el código" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary bg-secondary px-4 py-1.5 rounded-full">
            SOBRE MÍ
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-6">
            Conoce un poco más
          </h2>
          <p className="text-text-primary/50 mt-4 max-w-2xl mx-auto text-lg">
            Soy un desarrollador apasionado por la tecnología y el diseño.
            Me especializo en crear soluciones digitales que impactan.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-text-primary/70 leading-relaxed text-lg">
              Con más de 3 años de experiencia en desarrollo web, me he
              especializado en construir aplicaciones modernas utilizando las
              últimas tecnologías del ecosistema JavaScript.
            </p>
            <p className="text-text-primary/70 leading-relaxed text-lg">
              Mi enfoque combina código limpio, rendimiento óptimo y un diseño
              centrado en el usuario. Creo firmemente que la mejor tecnología es
              la que resuelve problemas reales.
            </p>
            <a
              href="#contact"
              className="inline-flex px-6 py-3 bg-primary text-secondary font-bold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Trabajemos juntos →
            </a>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-background-light rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
                  <stat.icon size={24} className="text-secondary" />
                </div>
                <p className="text-3xl font-extrabold text-secondary">
                  {stat.value}
                </p>
                <p className="text-sm text-text-primary/50 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}