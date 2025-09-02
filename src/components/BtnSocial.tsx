import { ReactNode } from "react";

interface BtnSocialProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  icone: ReactNode;
}

export default function BtnSocial({
  href,
  target = "_blank",
  icone,
}: BtnSocialProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="bg-gray-700 hover:bg-green-400 p-3 rounded-full text-white hover:text-gray-900 transition"
    >
      {icone}
    </a>
  );
}
