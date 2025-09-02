"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import BtnSocial from "./BtnSocial";

export default function Contato() {
  return (
    <section id="contato" className="p-10 text-center scroll-mt-20 bg-gray-900">
      <h2 className="text-3xl font-semibold text-center text-green-400">
        Contato
      </h2>

      <div className="flex flex-col items-center mt-10 gap-6">
        {/* Informações de contato */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-gray-100">
            Informações de Contato
          </h3>

          <div className="flex items-center gap-4 text-gray-300">
            <FaEnvelope className="text-green-400 text-xl" />
            <span>lucaspanfieti@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <FaPhoneAlt className="text-green-400 text-xl" />
            <span>(11) 98742-3930</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <FaMapMarkerAlt className="text-green-400 text-xl" />
            <span>São Paulo, SP - Brasil</span>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h4 className="text-gray-100 mb-4">Redes Sociais</h4>
            <div className="flex gap-4 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
