"use client";
import { useState } from "react";
import Image from "next/image";

export default function FotoPerfil() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center">
      <div
        className="relative w-72 h-72 cursor-pointer perspective"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Frente */}
          <div className="absolute inset-0 backface-hidden">
            <Image
              src="/images/perfil.png"
              alt="Foto de perfil frente"
              width={300}
              height={300}
              className="rounded-full border-4 border-green-400 shadow-lg object-cover hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Verso */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden">
            <Image
              src="/images/perfil2.png"
              alt="Foto de perfil verso"
              width={300}
              height={300}
              className="rounded-full border-4 border-green-400 shadow-lg object-cover hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
