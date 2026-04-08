import Image from "next/image";

import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaRegCalendarAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiVercel,
  SiFigma,
  SiSupabase,
} from "react-icons/si";
import { RiShareBoxFill } from "react-icons/ri";

// constante com projetos
const projects = [
  {
    name: "LampStore",
    description:
      "Plataforma SaaS desenvolvida para facilitar vendas online de forma simples e prática, especialmente para quem utiliza o WhatsApp como principal canal. Permite criar uma loja personalizada, cadastrar produtos e compartilhar um link para clientes visualizarem o catálogo, adicionarem itens ao carrinho e finalizarem o pedido diretamente pelo WhatsApp. Conta com dashboard completo, autenticação de usuários e sistema de analytics para acompanhamento de acessos.",
    link: "https://www.lampstore.com.br",
    github: "",
    image: "/images/projetos/lampstore.webp",
    techs: ["next", "ts", "tailwind", "vercel", "supabase"],
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

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="p-10 text-center scroll-mt-20 bg-gray-800"
    >
      <h2 className="text-3xl font-semibold text-center text-green-400">
        Projetos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-6 border border-gray-700 rounded-xl bg-gray-900 shadow hover:shadow-lg hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300 "
          >
            {/* Data do projeto */}
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
              <FaRegCalendarAlt />
              <span>{project.date}</span>
            </div>
            {/* Imagem do projeto */}
            <Image
              src={project.image}
              alt={project.name}
              width={400} // largura original da imagem
              height={200} // altura original da imagem
              className="w-full h-fit object-contain rounded-lg mb-3 border-1 border-gray-800"
            />
            <h3 className="font-bold text-lg text-left">{project.name}</h3>
            <p className="text-gray-400 mt-2 text-justify">
              {project.description}
            </p>
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
            </div>
            <div className="flex flex-wrap justify-center mt-3">
              <a
                href={project.link}
                target="_blank"
                className="mt-4 mb-2 inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition mx-auto"
              >
                <RiShareBoxFill />
                Ver Projeto
              </a>
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
          </div>
        ))}
      </div>
    </section>
  );
}
