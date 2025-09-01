"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

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
              <a
                href="https://github.com/LucasPanfieti"
                target="_blank"
                className="bg-gray-700 hover:bg-green-400 p-3 rounded-full text-white hover:text-gray-900 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-panfieti/"
                target="_blank"
                className="bg-gray-700 hover:bg-green-400 p-3 rounded-full text-white hover:text-gray-900 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Formulário */}
        {/* <form className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-gray-100">
            Envie uma Mensagem
          </h3>

          <input
            type="text"
            placeholder="Nome Completo *"
            className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Email *"
            className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            placeholder="Assunto *"
            className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            placeholder="Mensagem *"
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          <button
            type="submit"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition mx-auto"
          >
            Enviar Mensagem
          </button>
        </form> */}
      </div>
    </section>
  );
}
