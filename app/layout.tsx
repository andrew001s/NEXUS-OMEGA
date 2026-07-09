import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from "./ServiceWorkerRegister";

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
  appleWebApp: {
    capable: true,
    title: "Guardianes",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#050805",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
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
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
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
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
