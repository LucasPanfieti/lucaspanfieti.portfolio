"use client";

import { useState } from "react";
import Image from "next/image";

import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaRegCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiVercel,
  SiFigma,
  SiSupabase,
  SiSuno,
  SiElectron,
  SiSqlite,
  SiPwa,
  SiOpenai,
} from "react-icons/si";
import { RiShareBoxFill } from "react-icons/ri";

const INITIAL_VISIBLE = 6;

type Project = {
  name: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  techs: string[];
  date: string;
};

const projects: Project[] = [
  {
    name: "Mecânica Brasil — Sistema para Oficinas",
    description:
      "Software desktop para oficinas mecânicas: cadastro de clientes e veículos, abertura e acompanhamento de ordens de serviço, tudo rodando offline no Windows, sem depender de internet ou mensalidade. Dados ficam na própria máquina da oficina, com backup automático e restauração. Projeto em fase de validação com uso real em oficina.",
    image: "/images/projetos/mecanica-brasil.webp",
    techs: ["electron", "ts", "sqlite"],
    date: "Novembro 2026",
  },
  {
    name: "Quinhas Ball Fighters",
    description:
      "Jogo de luta 2D desenvolvido para navegador utilizando HTML, CSS e JavaScript puro. Conta com elenco de personagens originais, seleção de lutadores, sistema de combos, defesa, esfera de Ki, cenários personalizados e efeitos sonoros. Possui modos de jogo para um jogador e versus, suporte a teclado, gamepad e controles touch para dispositivos móveis, além de menus de configuração e publicação via GitHub Pages.",
    link: "https://lucaspanfieti.github.io/quinhas-fighters/",
    github: "https://github.com/LucasPanfieti/quinhas-fighters",
    image: "/images/projetos/quinhas-fighters.webp",
    techs: ["html", "css", "js"],
    date: "Novembro 2026",
  },
  {
    name: "Quinhas Fieti",
    description:
      "Site oficial do artista Quinhas Fieti, no padrão de smart-link da indústria. One-page cinematográfica com hero de lançamento, discografia das três faixas e modal de plataformas (YouTube e YouTube Music ativos; o resto em breve). Preview de 15 segundos no hover do desktop e autoplay ao abrir a modal, com play/pause só no popup. Layout mobile-first, capas em WebP e metadados de compartilhamento prontos para redes.",
    link: "https://quinhas-fieti.vercel.app",
    github: "https://github.com/LucasPanfieti/quinhas-fieti",
    image: "/images/projetos/quinhas-site.webp",
    techs: ["next", "ts", "tailwind", "vercel", "suno"],
    date: "Agosto 2026",
  },
  {
    name: "LampStore",
    description:
      "Plataforma SaaS para criar lojas online e vender pelo WhatsApp. O vendedor personaliza o catálogo, compartilha o link da loja e o cliente finaliza o pedido direto no WhatsApp. Inclui dashboard, autenticação, analytics, variantes de produto, trial PRO, PWA instalável e moderação automática de conteúdo com OpenAI.",
    link: "https://www.lampstore.com.br",
    github: "",
    image: "/images/projetos/lampstore.webp",
    techs: ["next", "react", "ts", "tailwind", "supabase", "vercel", "pwa", "openai"],
    date: "Abril 2026",
  },
  {
    name: "Gestão Financeira",
    description:
      "Projeto desenvolvido para ajudar no controle financeiro de forma simples e prática. O sistema permite cadastrar, visualizar e excluir transações, além de exibir o saldo atualizado do usuário. Conta também com sistema de login, registro e recuperação de senha, tudo funcionando com armazenamento local (LocalStorage) com design responsivo.",
    link: "https://lucaspanfieti.github.io/app_financeiro/",
    github: "https://github.com/LucasPanfieti/app_financeiro",
    image: "/images/projetos/financeiro-app.webp",
    techs: ["html", "tailwind", "js", "figma"],
    date: "Novembro 2025",
  },
  {
    name: "Meu Portfólio",
    description:
      "Portfólio de Lucas Panfieti, feito com Next.js e com deploy na Vercel",
    link: "https://lucaspanfieti-portfolio.vercel.app/",
    github: "https://github.com/LucasPanfieti/lucaspanfieti.portfolio",
    image: "/images/projetos/portifolio.webp",
    techs: ["next", "react", "vercel", "tailwind", "ts"],
    date: "Agosto 2025",
  },
  {
    name: "To Do List",
    description:
      "Aplicação de lista de tarefas feita com React/Next + Tailwind.",
    link: "https://to-do-list-next-three.vercel.app/",
    github: "https://github.com/LucasPanfieti/ToDoList_Next",
    image: "/images/projetos/todo-list.webp",
    techs: ["next", "react", "js", "css", "html", "vercel"],
    date: "Agosto 2025",
  },
  {
    name: "Color Name",
    description:
      "Neste app, o usuário digita o nome e escolhe uma cor. O nome é renderizado dinamicamente com o estilo personalizado!",
    github: "https://github.com/LucasPanfieti/color-name_Next",
    link: "https://color-name-next.vercel.app/",
    image: "/images/projetos/color-name.webp",
    techs: ["html", "css", "js", "react", "next", "vercel"],
    date: "Julho 2025",
  },
  {
    name: "Calculadora de IMC interativa",
    description: "Projeto simples em HTML, CSS e JS para calcular IMC.",
    link: "https://lucaspanfieti.github.io/calculo_imc/",
    image: "/images/projetos/imc.webp",
    techs: ["html", "css", "js"],
    github: "https://github.com/LucasPanfieti/calculo_imc",
    date: "Junho 2025",
  },
  {
    name: "Projeto Annabella",
    description:
      "Trata-se de um site institucional simples e estático (HTML+CSS) de uma modelo fictícia chamada Anna Bella, com foco na apresentação de biografia, campanhas publicitárias e informações de contato.",
    link: "https://lucaspanfieti.github.io/projeto-annabella/",
    image: "/images/projetos/annabella.webp",
    techs: ["html", "css"],
    github: "https://github.com/LucasPanfieti/projeto-annabella",
    date: "Junho 2025",
  },
  {
    name: "Projeto UNES",
    description:
      "Trata-se de uma página HTML simples e responsiva para uma universidade fictícia chamada UNES (Universidade Nacional de Ensino Superior).",
    link: "https://lucaspanfieti.github.io/projeto-final-html/",
    image: "/images/projetos/final-html.webp",
    techs: ["html"],
    github: "https://github.com/LucasPanfieti/projeto-final-html",
    date: "Maio 2025",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 border border-gray-700 rounded-xl bg-gray-900 shadow hover:shadow-lg hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
        <FaRegCalendarAlt />
        <span>{project.date}</span>
      </div>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.name}
          width={400}
          height={200}
          className="w-full h-fit object-contain rounded-lg mb-3 border-1 border-gray-800"
        />
      ) : (
        <div className="w-full aspect-video rounded-lg mb-3 border border-gray-700 bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
          Screenshot em breve
        </div>
      )}
      <h3 className="font-bold text-lg text-left">{project.name}</h3>
      <p className="text-gray-400 mt-2 text-justify">{project.description}</p>
      <div className="flex items-center gap-3 mt-3 text-xl">
        {project.techs?.includes("html") && (
          <FaHtml5 className="text-orange-500" />
        )}
        {project.techs?.includes("css") && (
          <FaCss3Alt className="text-blue-500" />
        )}
        {project.techs?.includes("js") && (
          <SiJavascript className="text-yellow-400" />
        )}
        {project.techs?.includes("react") && (
          <FaReact className="text-cyan-400" />
        )}
        {project.techs?.includes("next") && (
          <SiNextdotjs className="text-white" />
        )}
        {project.techs?.includes("ts") && (
          <SiTypescript className="text-blue-400" />
        )}
        {project.techs?.includes("tailwind") && (
          <SiTailwindcss className="text-sky-400" />
        )}
        {project.techs?.includes("vercel") && (
          <SiVercel className="text-white p-0.5" />
        )}
        {project.techs?.includes("figma") && (
          <SiFigma className="text-pink-500 p-0.5" />
        )}
        {project.techs?.includes("supabase") && (
          <SiSupabase className="text-green-500 p-0.5" />
        )}
        {project.techs?.includes("suno") && (
          <SiSuno className="text-white p-0.5" />
        )}
        {project.techs?.includes("electron") && (
          <SiElectron className="text-cyan-300 p-0.5" />
        )}
        {project.techs?.includes("sqlite") && (
          <SiSqlite className="text-sky-500 p-0.5" />
        )}
        {project.techs?.includes("pwa") && (
          <SiPwa className="text-purple-400 p-0.5" />
        )}
        {project.techs?.includes("openai") && (
          <SiOpenai className="text-emerald-400 p-0.5" />
        )}
      </div>
      {(project.link || project.github) && (
        <div className="flex flex-wrap justify-center mt-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="mt-4 mb-2 inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition mx-auto"
            >
              <RiShareBoxFill />
              Ver Projeto
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="mt-4 mb-2 inline-flex items-center justify-center gap-2 bg-gray-950 text-gray-200 font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition mx-auto"
            >
              <FaGithub className="text-gray-200" /> Código
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const gridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

export default function Projetos() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.slice(0, INITIAL_VISIBLE);
  const remainingProjects = projects.slice(INITIAL_VISIBLE);
  const hasMore = remainingProjects.length > 0;

  return (
    <section
      id="projetos"
      className="p-10 text-center scroll-mt-20 bg-gray-800"
    >
      <h2 className="text-3xl font-semibold text-center text-green-400">
        Projetos
      </h2>

      <div className={`${gridClassName} mt-10`}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {hasMore && !showAll && (
        <div className="relative mt-6">
          <div
            className={`${gridClassName} max-h-56 overflow-hidden pointer-events-none select-none`}
            aria-hidden="true"
          >
            {remainingProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-800/10 via-gray-800/75 to-gray-800" />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-2">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Mostrar mais
              <FaChevronDown className="text-sm" />
            </button>
          </div>
        </div>
      )}

      {hasMore && showAll && (
        <>
          <div className={`${gridClassName} mt-6`}>
            {remainingProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowAll(false)}
            className="mt-10 inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Mostrar menos
            <FaChevronUp className="text-sm" />
          </button>
        </>
      )}
    </section>
  );
}
