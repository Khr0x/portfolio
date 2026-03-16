"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const navLinks = [
  { label: "Resumen", href: "#resume" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Portafolio", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 text-lg font-bold group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
            <div className="w-full h-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-[#0A0A0A] font-extrabold text-sm">
              CM
            </div>
          </div>
          <div>
            <div className="text-white">Cristian Mendez</div>
            <div className="text-primary text-xs font-normal">SOFTWARE ENGINEER</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-primary'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <Button
          className="hidden lg:flex bg-primary text-[#0A0A0A] hover:bg-primary/90 font-semibold rounded-full px-8 py-5"
          asChild
        >
          <Link href="#contact">Contrátame</Link>
        </Button>

        {/* Hamburger Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden rounded-full bg-primary/10 text-primary hover:bg-primary/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-primary'
                      : 'text-white/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                className="w-full bg-primary text-[#0A0A0A] hover:bg-primary/90 font-semibold rounded-full px-8 py-5"
                asChild
              >
                <Link href="#contact">Contrátame</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}