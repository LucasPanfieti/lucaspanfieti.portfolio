"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sections = ["sobre", "projetos", "habilidades", "cursos", "contato"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full h-1 bg-green-400 fixed top-0 left-0 z-50"></div>
      <header className="fixed top-1 left-0 w-full z-50">
        {/* Header com sombra */}
        <div className="bg-gray-800/90 backdrop-blur-sm shadow-xl flex justify-between items-center p-6">
          {/* Logo */}
          <h1 className="text-3xl font-bold cursor-pointer">
            <a
              href="#"
              className="inline-flex items-center relative whitespace-nowrap
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-green-400 after:transition-all
              hover:after:w-full"
            >
              {/* L */}
              <span
                className={`transition-colors duration-500 ease-in-out ${
                  isScrolled ? "text-green-400" : "text-gray-100"
                }`}
              >
                L
              </span>
              {/* ucas */}
              <span
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isScrolled ? "max-w-0 opacity-0" : "max-w-[120px] opacity-100"
                }`}
              >
                ucas
              </span>
              {/* espaço */}
              <span
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isScrolled ? "max-w-0 opacity-0" : "max-w-[12px] opacity-100"
                }`}
              >
                &nbsp;
              </span>
              {/* P */}
              <span
                className={`text-green-400 transition-all duration-500 ease-in-out ${
                  isScrolled ? "translate-y-[0.12em]" : "translate-y-0"
                }`}
              >
                P
              </span>
              {/* anfieti */}
              <span
                className={`overflow-hidden text-green-400 transition-all duration-500 ease-in-out ${
                  isScrolled ? "max-w-0 opacity-0" : "max-w-[120px] opacity-100"
                }`}
              >
                anfieti
              </span>
            </a>
          </h1>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-6 text-gray-100">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative group px-1 py-1 cursor-pointer
             text-gray-100 hover:text-green-400 transition-all duration-300
             transform hover:translate-x-2"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400
                   group-hover:w-full transition-all duration-300 ease-in-out"
                ></span>
              </a>
            ))}
          </nav>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-2xl text-gray-100 z-50 cursor-pointer"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars className="transition-transform hover:scale-110" />
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 transition-opacity duration-300 ${
            drawerOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }} // 50% de preto
          onClick={() => setDrawerOpen(false)}
        ></div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
        >
          <div className="flex flex-col p-8 gap-8 h-full">
            {/* Botão fechar */}
            <button
              className="self-end text-2xl text-green-400 hover:text-green-300 transition-transform hover:scale-110 cursor-pointer"
              onClick={() => setDrawerOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Links */}
            <nav className="flex flex-col gap-6 mt-10">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-lg text-gray-100 cursor-pointer
             transition-all duration-300 transform hover:translate-x-2 hover:text-green-400"
                  onClick={() => setDrawerOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
