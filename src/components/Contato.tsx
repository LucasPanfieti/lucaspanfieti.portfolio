"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import BtnSocial from "./BtnSocial";

const EMAIL = "lucaspanfieti@gmail.com";

export default function Contato() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const input = document.createElement("input");
      input.value = EMAIL;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contato" className="p-10 text-center scroll-mt-20 bg-gray-900">
      <h2 className="text-3xl font-semibold text-center text-green-400">
        Contato
      </h2>
      <p className="mt-3 max-w-xl mx-auto text-gray-400">
        Quer conversar sobre um projeto ou oportunidade? Me chama por e-mail ou
        pelas redes.
      </p>

      <div className="flex flex-col items-center mt-10">
        <div className="w-full max-w-xl bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-400 text-xl" />
              <span>{EMAIL}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-400 text-xl" />
              <span>São Paulo, SP - Brasil</span>
            </div>
          </div>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? "E-mail copiado!" : "Copiar e-mail"}
          </button>

          <hr className="w-full border-gray-700" />

          <div>
            <h4 className="text-gray-100 mb-4">Redes Sociais</h4>
            <div className="flex gap-4 justify-center">
              <BtnSocial
                href="https://github.com/LucasPanfieti"
                target="_blank"
                icone={<FaGithub />}
              />
              <BtnSocial
                href="https://www.linkedin.com/in/lucas-panfieti/"
                target="_blank"
                icone={<FaLinkedin />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
