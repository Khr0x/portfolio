import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary bg-secondary px-4 py-1.5 rounded-full">
            CONTACTO
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-text-primary/50 mt-4 max-w-2xl mx-auto text-lg">
            Hablemos sobre cómo puedo ayudarte a llevar tu idea al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
                <Mail size={22} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary">Email</h4>
                <p className="text-text-primary/50 mt-1">tu@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
                <Phone size={22} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary">Teléfono</h4>
                <p className="text-text-primary/50 mt-1">+52 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
                <MapPin size={22} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary">Ubicación</h4>
                <p className="text-text-primary/50 mt-1">Ciudad de México, MX</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-5 py-3.5 bg-card-bg border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-3.5 bg-card-bg border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              className="w-full px-5 py-3.5 bg-card-bg border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <textarea
              rows={5}
              placeholder="Tu mensaje..."
              className="w-full px-5 py-3.5 bg-card-bg border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-primary font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all hover:-translate-y-0.5"
            >
              Enviar mensaje <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}