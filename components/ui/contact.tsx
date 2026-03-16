"use client";

import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
        });
        // Limpiar formulario
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Error al enviar el mensaje. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Error de conexión. Por favor, inténtalo más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            CONTACTO
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            Hablemos sobre cómo puedo ayudarte a llevar tu idea al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white">Email</h4>
                <p className="text-white/60 mt-1">cristian.mendezig@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white">Teléfono</h4>
                <p className="text-white/60 mt-1">+52 961 289 4846</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white">Ubicación</h4>
                <p className="text-white/60 mt-1">Chiapas, MX</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
              required
              className="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tu mensaje..."
              required
              className="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`flex items-center gap-2 p-4 rounded-xl ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span className="text-sm">{submitStatus.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-[#0A0A0A] font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-full opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-40" />
    </section>
  );
} 