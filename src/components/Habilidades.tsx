import type { IconType } from "react-icons";
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
  SiSupabase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Clapperboard,
  Images,
  Palette,
  Pencil,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

type SkillIcon = IconType | LucideIcon;

type Skill = {
  name: string;
  subtitle?: string;
  color?: string;
  Icon?: SkillIcon;
  isLucide?: boolean;
  imageSrc?: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: "Desenvolvimento",
    skills: [
      // Stack
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
      // Ferramentas
      { name: "Cursor", imageSrc: "/icons/cursor.svg" },
      { name: "Visual Studio Code", Icon: VscVscode, color: "#007ACC" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "#F0F6FC" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Inteligência Artificial",
    skills: [
      // Assistentes
      { name: "ChatGPT", imageSrc: "/icons/openai.svg" },
      { name: "Google Gemini", imageSrc: "/icons/googlegemini.svg" },
      { name: "Claude", imageSrc: "/icons/claude.svg" },
      // Criação
      {
        name: "Google Flow",
        subtitle: "Geração de Vídeos",
        imageSrc: "/icons/google-flow.png",
      },
      {
        name: "Nano Banana",
        subtitle: "Geração de Imagens",
        imageSrc: "/icons/nano-banana.svg",
      },
      {
        name: "Suno AI",
        subtitle: "Produção Musical",
        imageSrc: "/icons/suno.svg",
      },
      {
        name: "Fish Audio",
        subtitle: "Síntese de Voz",
        imageSrc: "/icons/fishaudio.svg",
      },
    ],
  },
  {
    title: "Design e Criação Digital",
    skills: [
      // Competências
      {
        name: "UI/UX Design",
        Icon: Palette,
        color: "#F472B6",
        isLucide: true,
      },
      {
        name: "Design Responsivo",
        Icon: Smartphone,
        color: "#2DD4BF",
        isLucide: true,
      },
      {
        name: "Desenho Digital",
        Icon: Pencil,
        color: "#FBBF24",
        isLucide: true,
      },
      {
        name: "Edição de Imagem",
        Icon: Images,
        color: "#A78BFA",
        isLucide: true,
      },
      {
        name: "Edição Audiovisual",
        Icon: Clapperboard,
        color: "#F472B6",
        isLucide: true,
      },
      // Ferramentas
      { name: "IbisPaint", imageSrc: "/icons/ibispaint.png" },
      { name: "CapCut", imageSrc: "/icons/capcut.png" },
    ],
  },
];

const cardClassName =
  "flex flex-col items-center bg-gray-800 px-3 py-4 rounded-2xl shadow-md hover:shadow-green-400/30 hover:scale-105 transition-transform duration-300";

function SkillCard({ name, subtitle, Icon, color, isLucide, imageSrc }: Skill) {
  return (
    <div className={cardClassName}>
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="w-11 h-11 object-contain"
        />
      ) : Icon && isLucide ? (
        <Icon
          className="w-11 h-11"
          style={color ? { color } : undefined}
          strokeWidth={1.75}
        />
      ) : Icon ? (
        <Icon className="text-4xl" style={color ? { color } : undefined} />
      ) : null}
      <span className="mt-2.5 text-gray-200 font-medium leading-snug text-center">
        {name}
      </span>
      {subtitle ? (
        <span className="mt-0.5 text-gray-400 text-sm leading-snug text-center">
          {subtitle}
        </span>
      ) : null}
    </div>
  );
}

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="p-10 text-center scroll-mt-20 bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-center text-green-400 mb-8">
        Habilidades
      </h2>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
