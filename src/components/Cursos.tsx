"use client";

import { useState } from "react";
import Image from "next/image";

import { FaChevronDown, FaChevronUp, FaRegCalendarAlt } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";

type CertLink = {
  name: string;
  link: string;
  horas?: string;
};

type Certificado = {
  name: string;
  instituicao: string;
  data: string;
  description?: string;
  horas?: string;
  image: string;
  link?: string;
  links?: CertLink[];
  icon?: string;
  colorIcon?: string;
};

const certificados: Certificado[] = [
  {
    name: "Web Frontend Completo: HTML, CSS, JS, TS, React e Next 2025",
    instituicao: "Udemy",
    data: "Cursando",
    horas: "75h",
    image: "/images/certificados/front.webp",
    icon: "/images/certificados/iconUdemy.webp",
    colorIcon: "#bf30f4",
  },
  {
    name: "Tecnólogo - Análise e Desenvolvimento de Sistemas",
    instituicao: "Anhanguera",
    data: "Ago 2023 - Dez 2025",
    horas: "2100h",
    image: "/images/certificados/anhanguera.webp",
    link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Education/906515643/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
    icon: "/images/certificados/iconAnhanguera.ico",
    colorIcon: "#f14e12",
  },
  {
    name: "Git e GitHub do básico ao avançado",
    instituicao: "Udemy",
    data: "Setembro 2025",
    horas: "8h",
    image: "/images/certificados/git.webp",
    link: "http://ude.my/UC-b0de4d4b-6822-4738-8fba-ba436d2a048e",
    icon: "/images/certificados/iconUdemy.webp",
    colorIcon: "#bf30f4",
  },
  {
    name: "Introdução a Programação Orientada a Objetos (POO)",
    instituicao: "Fundação Bradesco",
    data: "Março 2024",
    description: "Código da credencial 82E23CA4-81E8 41A8-84F3-19507D053D4E",
    horas: "5h",
    image: "/images/certificados/bradesco.webp",
    link: "https://www.linkedin.com/in/lucas-panfieti/details/certifications/1712012044447/single-media-viewer/?type=DOCUMENT&profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
    icon: "/images/certificados/iconBradesco.webp",
    colorIcon: "#cc082e",
  },
  {
    name: "Linguagem de Programação Python - Básico",
    instituicao: "Fundação Bradesco",
    data: "Janeiro 2024",
    description: "Código da credencial 7534DAAE-EE6E-4904-A4CF-4469FFB5163D",
    horas: "18h",
    image: "/images/certificados/bradesco.webp",
    link: "https://www.linkedin.com/in/lucas-panfieti/details/certifications/1712012109986/single-media-viewer?type=DOCUMENT&profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B69KWPS%2B5TcO1B1%2BCR6Kz2Q%3D%3D",
    icon: "/images/certificados/iconBradesco.webp",
    colorIcon: "#cc082e",
  },
  {
    name: "Artes Digitais, Design, Audiovisual e 3D",
    instituicao: "Escola SAGA",
    data: "Set 2021 - Dez 2023",
    description:
      "Formação completa em São Paulo/SP, com certificados por módulo: Arte Vetorial, Pintura Digital, Composição de Imagens, Edição Audiovisual, Efeitos Visuais e Motion Graphics, Blender 3D, Personagens 3D, Cenários 3D e Tecnologias Imersivas (Unreal Engine e Spark AR).",
    horas: "270h",
    image: "/images/certificados/saga.webp",
    icon: "/images/certificados/iconSaga.webp",
    colorIcon: "#ea580c",
    links: [
      {
        name: "Arte Vetorial 5.0",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1479655093/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
      {
        name: "Pintura Digital 5.0",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1480265443/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
      {
        name: "Composição de Imagens 5.0",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1480350702/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
      {
        name: "Edição Audiovisual 5.0",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1480451675/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
      {
        name: "Efeitos Visuais e Motion Graphics 5.0",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1480511612/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
      {
        name: "3D1 - Cenários 5.0",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1479462680/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
      {
        name: "3D2 - Personagens 5.0",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1479530572/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
      {
        name: "3D3 - Blender",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1479954586/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
      {
        name: "Tecnologias Imersivas (Unreal Engine e Spark AR)",
        horas: "30h",
        link: "https://www.linkedin.com/in/lucas-panfieti/overlay/Certifications/1480174451/treasury/?profileId=ACoAAC7PsTwBuuMPqYZPH7WMySMIlP3eK8iUghE",
      },
    ],
  },
];

function CertificadoCard({ certificado }: { certificado: Certificado }) {
  const [open, setOpen] = useState(false);
  const hasMultiple = Boolean(certificado.links?.length);

  return (
    <div className="text-left p-4 border border-gray-700 rounded-xl bg-gray-900 shadow hover:shadow-lg hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
        <FaRegCalendarAlt />
        <span>{certificado.data}</span>
      </div>

      <Image
        src={certificado.image}
        alt={certificado.name}
        width={400}
        height={200}
        className="w-full h-fit object-contain rounded-lg mb-3"
      />

      <div className="flex items-center gap-2 mt-1">
        {certificado.icon && (
          <Image
            src={certificado.icon}
            alt={certificado.instituicao}
            width={25}
            height={25}
            className="w-6 h-6 object-contain"
          />
        )}
        <span className="text-base" style={{ color: certificado.colorIcon }}>
          {certificado.instituicao}
        </span>
      </div>
      <h2 className="font-bold text-lg mt-2">{certificado.name}</h2>

      {certificado.description && (
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          {certificado.description}
        </p>
      )}

      {certificado.horas && (
        <p className="text-gray-400 mt-2">
          Carga Horária:{" "}
          <span className="text-gray-200">{certificado.horas}</span>
        </p>
      )}

      {certificado.link && !hasMultiple && (
        <div className="flex justify-center mt-4">
          <a
            href={certificado.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 mb-2 inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <RiShareBoxFill />
            Ver Certificado
          </a>
        </div>
      )}

      {hasMultiple && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="w-full inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
          >
            <RiShareBoxFill />
            {open ? "Ocultar certificados" : "Ver certificados"}
            {open ? (
              <FaChevronUp className="text-sm" />
            ) : (
              <FaChevronDown className="text-sm" />
            )}
          </button>

          {open && (
            <div className="mt-3 flex flex-col gap-2">
              {certificado.links!.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 bg-gray-800 border border-gray-700 text-gray-200 text-sm font-medium px-3 py-2 rounded-lg hover:border-green-400 hover:text-green-400 transition"
                >
                  <span className="text-left leading-snug">{item.name}</span>
                  {item.horas && (
                    <span className="text-gray-500 shrink-0">{item.horas}</span>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Cursos() {
  return (
    <section id="cursos" className="p-10 text-center scroll-mt-20 bg-gray-800">
      <h2 className="text-3xl font-semibold text-center text-green-400">
        Cursos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {certificados.map((certificado) => (
          <CertificadoCard key={certificado.name} certificado={certificado} />
        ))}
      </div>
    </section>
  );
}
