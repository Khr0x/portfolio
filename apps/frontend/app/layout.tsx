import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cristian Mendez | Senior Full Stack Developer",
  description: "Portafolio profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${plusJakarta.variable}`}>
      <body className="font-sans bg-[#0A0A0A] relative">
        {/* Grid Pattern Background */}
        <div 
          className="fixed inset-0 z-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(198, 241, 69, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198, 241, 69, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Radial Gradient Overlay */}
        <div 
          className="fixed inset-0 z-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(198, 241, 69, 0.03), transparent 50%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}