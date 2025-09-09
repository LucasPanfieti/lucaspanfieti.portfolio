import Image from "next/image";

import { FaRegCalendarAlt } from "react-icons/fa";

import { RiShareBoxFill } from "react-icons/ri";

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
    colorIcon: "#bf30f4",
  },
  {
    name: "Git e GitHub do básico ao avançado",
    instituicao: "Udemy",
    data: "Setembro 2025",
    description: "",
    horas: "8h",
    image: "/images/certificados/git.webp",
    link: "http://ude.my/UC-b0de4d4b-6822-4738-8fba-ba436d2a048e",
    icon: "/images/certificados/iconUdemy.png",
    colorIcon: "#bf30f4",
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

export default function Cursos() {
  return (
    <section id="cursos" className="p-10 text-center scroll-mt-20 bg-gray-800">
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
  );
}
