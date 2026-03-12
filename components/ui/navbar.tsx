"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 text-lg font-bold group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
            <div className="w-full h-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-[#0A0A0A] font-extrabold text-sm">
              CM
            </div>
          </div>
          <div>
            <div className="text-white">Cristian Mendez</div>
            <div className="text-primary text-xs font-normal">SOFTWARE ENGINEER</div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium ${
                  idx === 1 ? 'text-primary' : 'text-white/60 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <Button
          className="hidden lg:flex bg-primary text-[#0A0A0A] hover:bg-primary/90 font-semibold rounded-full px-8 py-5"
          asChild
        >
          <a href="#contact">Hire Me</a>
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
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-white/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                className="w-full bg-primary text-[#0A0A0A] hover:bg-primary/90 font-semibold rounded-full px-8 py-5"
                asChild
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}