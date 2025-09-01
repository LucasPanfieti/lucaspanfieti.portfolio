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
  SiHtml5,
  SiCss3,
  SiReact,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { RiShareBoxFill } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";
import FadeInSection from "@/components/FadeInSection";

import Header from "@/components/Header";
import Contato from "@/components/Contato";
import FotoPerfil from "@/components/FotoPerfil";
import SobreMim from "@/components/SobreMim";
import Footer from "@/components/Footer";

// constante com projetos
const projects = [
  {
    name: "Meu Portfólio",
    description:
      "Portfólio de Lucas Panfieti, feito com Next.js e com deploy na Vercel",
    link: "https://lucaspanfieti-portfolio.vercel.app/",
    github: "https://github.com/LucasPanfieti/lucaspanfieti.portfolio",
    image: "/preview.png",
    techs: ["next", "react", "vercel", "tailwind", "ts"],
    date: "Agosto 2025",
  },
  {
    name: "To Do List",
    description:
      "Aplicação de lista de tarefas feita com React/Next + Tailwind.",
    link: "https://to-do-list-next-three.vercel.app/",
    github: "https://github.com/LucasPanfieti/ToDoList_Next",
    image: "/images/todo-list.png",
    techs: ["next", "react", "js", "css", "html", "vercel"],
    date: "Agosto 2025",
  },
  {
    name: "Color Name",
    description:
      "Neste app, o usuário digita o nome e escolhe uma cor. O nome é renderizado dinamicamente com o estilo personalizado!",
    github: "https://github.com/LucasPanfieti/color-name_Next",
    link: "https://color-name-next.vercel.app/",
    image: "/images/color-name.png",
    techs: ["html", "css", "js", "react", "next", "vercel"],
    date: "Julho 2025",
  },
  {
    name: "Calculadora de IMC interativa",
    description: "Projeto simples em HTML, CSS e JS para calcular IMC.",
    link: "https://lucaspanfieti.github.io/calculo_imc/",
    image: "/images/imc.png",
    techs: ["html", "css", "js"],
    github: "https://github.com/LucasPanfieti/calculo_imc",
    date: "Junho 2025",
  },
  {
    name: "Projeto Annabella",
    description:
      "Trata-se de um site institucional simples e estático (HTML+CSS) de uma modelo fictícia chamada Anna Bella, com foco na apresentação de biografia, campanhas publicitárias e informações de contato.",
    link: "https://lucaspanfieti.github.io/projeto-annabella/",
    image: "/images/annabella.png",
    techs: ["html", "css"],
    github: "https://github.com/LucasPanfieti/projeto-annabella",
    date: "Junho 2025",
  },
  {
    name: "Projeto UNES",
    description:
      "Trata-se de uma página HTML simples e responsiva para uma universidade fictícia chamada UNES (Universidade Nacional de Ensino Superior).",
    link: "https://lucaspanfieti.github.io/projeto-final-html/",
    image: "/images/final-html.png",
    techs: ["html"],
    github: "https://github.com/LucasPanfieti/projeto-final-html",
    date: "Maio 2025",
  },
];

// constante com certificados
const certificados = [
  {
    name: "Tecnólogo - Análise e Desenvolvimento de Sistemas",
    instituicao: "Anhanguera",
    data: "Cursando último semestre",
    description: "",
    horas: "",
    image: "/images/certificados/AAA.jpg",
    link: "",
    icon: "/images/certificados/aa.ico",
    colorIcon: "#f14e12",
  },
  {
    name: "Web Frontend Completo: HTML, CSS, JS, TS, React e Next 2025",
    instituicao: "Udemy",
    data: "Cursando",
    description: "",
    horas: "75h",
    image: "/images/certificados/front.webp",
    link: "",
    icon: "/images/certificados/iconUdemy.png",
    colorIcon: "#a13df0",
  },
  {
    name: "Git e GitHub do básico ao avançado",
    instituicao: "Udemy",
    data: "Cursando",
    description: "",
    horas: "8h",
    image: "/images/certificados/git.webp",
    link: "",
    icon: "/images/certificados/iconUdemy.png",
    colorIcon: "#a13df0",
  },
  {
    name: "Introdução a Programação Orientada a Objetos (POO)",
    instituicao: "Fundação Bradesco",
    data: "Março 2024",
    description: "Código da credencial 82E23CA4-81E8 41A8-84F3-19507D053D4E",
    horas: "5h",
    image: "/images/certificados/bb.jpg",
    link: "https://www.linkedin.com/in/lucas-panfieti/details/certifications/1712012044447/single-media-viewer/?type=DOCUMENT&profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
    icon: "/images/certificados/iconFundacaoBradesco2.png",
    colorIcon: "#cc082e",
  },
  {
    name: "Linguagem de Programação Python - Básico",
    instituicao: "Fundação Bradesco",
    data: "Janeiro 2024",
    description: "Código da credencial 7534DAAE-EE6E-4904-A4CF-4469FFB5163D",
    horas: "18h",
    image: "/images/certificados/bb.jpg",
    link: "https://www.linkedin.com/in/lucas-panfieti/details/certifications/1712012109986/single-media-viewer?type=DOCUMENT&profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B69KWPS%2B5TcO1B1%2BCR6Kz2Q%3D%3D",
    icon: "/images/certificados/iconFundacaoBradesco2.png",
    colorIcon: "#cc082e",
  },
];

export default function Home() {
  return (
    <main className="pt-20 min-h-screen bg-gray-900 text-gray-100">
      {/* Cabeçalho */}
      <Header />

      <div className="flex flex-wrap justify-center items-center mt-14 mb-4 gap-2 lg:mt-12 lg:mb-12 xl:gap-20">
        {/* Animação */}
        <FadeInSection>
          {/* Foto de perfil */}
          <FotoPerfil />
        </FadeInSection>
        <FadeInSection>
          {/* Sobre mim */}
          <SobreMim />
        </FadeInSection>
      </div>

      {/* Projetos */}
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
              className="p-4 border border-gray-700 rounded-xl bg-gray-900 shadow hover:shadow-lg  hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300
"
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
                className="w-full h-40 object-cover rounded-md mb-3"
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
              </div>
              <div className="flex flex-wrap justify-center mt-3">
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-3 inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition mx-auto"
                >
                  <RiShareBoxFill />
                  Ver Projeto
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="mt-3 inline-flex items-center justify-center gap-2 bg-gray-950 text-gray-200 font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition mx-auto"
                  >
                    <FaGithub className="text-gray-200" /> Código
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades */}
      <section
        id="habilidades"
        className="p-10 text-center scroll-mt-20 bg-gray-900"
      >
        <h2 className="text-3xl font-bold text-center text-green-400 mb-8">
          Habilidades
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {/* HTML */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiHtml5 className="text-orange-500 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">HTML</span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiCss3 className="text-blue-500 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">CSS</span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiJavascript className="text-yellow-400 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">JavaScript</span>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiTypescript className="text-blue-400 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">TypeScript</span>
          </div>

          {/* React */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiReact className="text-cyan-400 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">React</span>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiNextdotjs className="text-white text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">Next.js</span>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiTailwindcss className="text-sky-400 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">Tailwind</span>
          </div>

          {/* Vercel */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiVercel className="text-white text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">Vercel</span>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <FaGithub className="text-gray-300 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">GitHub</span>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiGit className="text-red-500 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">Git</span>
          </div>

          {/* Figma */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <SiFigma className="text-pink-500 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">Figma</span>
          </div>

          {/* VS Code */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
            <VscVscodeInsiders className="text-blue-500 text-5xl" />
            <span className="mt-3 text-gray-200 font-medium">VS Code</span>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section
        id="cursos"
        className="p-10 text-center scroll-mt-20 bg-gray-800"
      >
        <h2 className="text-3xl font-semibold text-center text-green-400">
          Cursos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {certificados.map((certificado) => (
            <div
              key={certificado.name}
              className="text-left p-4 border border-gray-700 rounded-xl bg-gray-900 shadow hover:shadow-lg hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300"
            >
              {/* Data */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <FaRegCalendarAlt />
                <span>{certificado.data}</span>
              </div>

              {/* Imagem */}
              <Image
                src={certificado.image}
                alt={certificado.name}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-3"
              />

              {/* Nome e instituição */}
              <div className="flex items-center gap-2 mt-1">
                {certificado.icon && (
                  <Image
                    src={certificado.icon}
                    alt={certificado.instituicao}
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                )}
                <span
                  className="text-base"
                  style={{ color: certificado.colorIcon }}
                >
                  {certificado.instituicao}
                </span>
              </div>
              <h2 className="font-bold text-lg mt-2">{certificado.name}</h2>

              {/* Carga horária */}
              {certificado.horas && (
                <p className="text-gray-400 mt-2">
                  Carga Horária:{" "}
                  <span className="text-gray-200">{certificado.horas}</span>
                </p>
              )}

              {/* Link para visualizar */}
              {certificado.link && (
                <div className="flex justify-center mt-4">
                  <a
                    href={certificado.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition mx-auto"
                  >
                    <RiShareBoxFill />
                    Ver Certificado
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <Contato />

      {/* Footer */}
      <Footer />
    </main>
  );
}
