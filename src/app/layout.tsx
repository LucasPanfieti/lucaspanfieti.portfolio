// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio | Lucas - Desenvolvedor Front-end",
  description:
    "Portfólio de Lucas, desenvolvedor front-end. Projetos em React, Next.js, Tailwind, TypeScript e mais.",
  openGraph: {
    title: "Portfólio | Lucas - Desenvolvedor Front-end",
    description:
      "Confira meus projetos e habilidades em desenvolvimento front-end.",
    url: "https://lucaspanfieti-portfolio.vercel.app/",
    siteName: "Portfólio Lucas",
    images: [
      {
        url: "/preview.webp", // coloque o arquivo preview.webp dentro de /public
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
