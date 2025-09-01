import Image from "next/image";

export default function FotoPerfil() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        src="/images/perfil.png"
        alt="Foto de perfil"
        width={300}
        height={300}
        className="rounded-full border-4 border-green-400 shadow-lg hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300"
      />
    </section>
  );
}
