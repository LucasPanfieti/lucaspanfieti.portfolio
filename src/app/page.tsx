import Header from "@/components/Header";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Sobre from "@/components/Sobre";
import Projetos from "@/components/Projetos";
import Habilidades from "@/components/Habilidades";
import Cursos from "@/components/Cursos";

export default function Home() {
  return (
    <main className="pt-20 min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Cursos />
      <Contato />
      <Footer />
    </main>
  );
}
