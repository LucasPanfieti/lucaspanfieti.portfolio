// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio | Lucas Panfieti - Software Developer",
  description:
    "Portfólio de Lucas Panfieti, Software Developer com foco em Front-end. Projetos em React, Next.js, TypeScript, Tailwind e mais.",
  openGraph: {
    title: "Portfólio | Lucas Panfieti - Software Developer",
    description:
      "Confira meus projetos e habilidades em desenvolvimento web, IA e criação digital.",
    url: "https://lucaspanfieti-portfolio.vercel.app/",
    siteName: "Portfólio Lucas Panfieti",
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "Lucas Panfieti - Software Developer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | Lucas Panfieti - Software Developer",
    description:
      "Portfólio de Lucas Panfieti com projetos em React, Next.js, TypeScript e Tailwind.",
    images: ["/preview.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-gray-100">{children}</body>
    </html>
  );
}
