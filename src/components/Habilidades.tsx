import { FaGithub } from "react-icons/fa";
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
import { VscVscodeInsiders } from "react-icons/vsc";

export default function Habilidades() {
  return (
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
  );
}
