import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

import BtnSocial from "./BtnSocial";

export default function SobreMim() {
  return (
    <section id="sobre" className="p-10 text-center scroll-mt-20">
      <h2 className="text-3xl font-semibold text-green-400">Sobre mim</h2>
      <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-justify">
        Olá! 👋 Meu nome é{" "}
        <span className="text-green-400">Lucas Panfieti</span>, atuo hoje como{" "}
        <span className="text-green-400">Software Developer</span> e sou formado
        em{" "}
        <span className="text-green-400">
          Análise e Desenvolvimento de Sistemas
        </span>
        . Tenho foco em{" "}
        <span className="text-green-400">desenvolvimento front-end</span>, com
        tecnologias como{" "}
        <span className="text-green-400">
          HTML, CSS, JavaScript, TypeScript, React, Next.js e Tailwind CSS
        </span>
        . Estou sempre buscando desafios práticos e formas de aprimorar minhas
        habilidades.
      </p>

      <a
        href="/Lucas_Panfieti_CV.pdf"
        download
        className="mt-10 mb-4 inline-flex items-center gap-2 bg-green-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-green-600  hover:shadow-green-400 hover:scale-105 transition-transform duration-300
   "
      >
        <FaDownload /> Baixar Currículo
      </a>

      <div className="pt-6 flex gap-6 justify-center 3 ">
        {/* E-mail */}
        <BtnSocial
          href="mailto:lucaspanfieti@gmail.com"
          target="_blank"
          icone={<FaEnvelope />}
        />

        {/* GitHub */}
        <BtnSocial
          href="https://github.com/LucasPanfieti"
          target="_blank"
          icone={<FaGithub />}
        />

        {/* LinkedIn */}
        <BtnSocial
          href="https://www.linkedin.com/in/lucas-panfieti/"
          target="_blank"
          icone={<FaLinkedin />}
        />
      </div>
    </section>
  );
}
