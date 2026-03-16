import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#0A0A0A] text-white/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm flex items-center gap-1">
          Hecho con <Heart size={14} className="text-primary fill-primary" /> por{" "}
          <span className="font-bold text-primary">Cristian Mendez</span> © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary/30 transition-colors"
          >
            <Github size={16} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary/30 transition-colors"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href="mailto:cristianmendez.dev@gmail.com"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary/30 transition-colors"
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}