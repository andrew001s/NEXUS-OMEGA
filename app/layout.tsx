import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guardianes: El Legado del Bosque",
  description:
    "Un videojuego educativo 2D. Explora un laboratorio abandonado invadido por la naturaleza y descubre los secretos del bosque.",
  keywords: ["videojuego", "educativo", "2D", "pixel art", "bosque", "naturaleza"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050805] text-[#e2e8f0]">
        <div
          className="rotate-device-overlay fixed inset-0 z-[9999] hidden flex-col items-center justify-center gap-4 bg-[#050805] p-6 text-center"
          style={{ fontFamily: '"Courier New", monospace' }}
        >
          <div className="text-5xl mb-2">↻</div>
          <div className="text-sm uppercase tracking-[0.3em]" style={{ color: '#4ade80' }}>
            Gira el dispositivo
          </div>
          <div className="text-[10px] tracking-wider max-w-xs" style={{ color: 'rgba(74, 222, 128, 0.5)' }}>
            Usa tu dispositivo en modo horizontal para una mejor experiencia
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
