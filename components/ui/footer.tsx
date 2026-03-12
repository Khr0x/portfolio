import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-secondary text-white/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm flex items-center gap-1">
          Hecho con <Heart size={14} className="text-primary fill-primary" /> por{" "}
          <span className="font-bold text-primary">Tu Nombre</span> © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "#" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary/30 transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}