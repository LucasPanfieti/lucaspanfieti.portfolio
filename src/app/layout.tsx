// app/layout.tsx
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
  title: "Portfólio | Lucas - Desenvolvedor Front-end",
  description:
    "Portfólio de Lucas, desenvolvedor front-end. Projetos em React, Next.js, Tailwind, TypeScript e mais.",
  openGraph: {
    title: "Portfólio | Lucas - Desenvolvedor Front-end",
    description:
      "Confira meus projetos e habilidades em desenvolvimento front-end.",
    url: "https://portfolio-beta-sable-98.vercel.app/",
    siteName: "Portfólio Lucas",
    images: [
      {
        url: "/preview.png", // coloque o arquivo preview.png dentro de /public
        width: 1200,
        height: 630,
        alt: "Lucas - Desenvolvedor Front-end",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | Lucas - Desenvolvedor Front-end",
    description:
      "Portfólio de Lucas com projetos em React, Next.js, Tailwind e TypeScript.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
