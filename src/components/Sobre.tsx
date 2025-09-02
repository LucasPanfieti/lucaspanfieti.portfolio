import FadeInSection from "./FadeInSection";
import FotoPerfil from "./FotoPerfil";
import SobreMim from "./SobreMim";

export default function Sobre() {
  return (
    <div className="flex flex-wrap justify-center items-center mt-14 mb-4 gap-2 lg:mt-12 lg:mb-12 xl:gap-20">
      {/* Animação */}
      <FadeInSection>
        {/* Foto de perfil */}
        <FotoPerfil />
      </FadeInSection>
      {/* Animação */}
      <FadeInSection>
        {/* Sobre mim */}
        <SobreMim />
      </FadeInSection>
    </div>
  );
}
