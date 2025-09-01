"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeInSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // começa invisível e um pouco abaixo
      whileInView={{ opacity: 1, y: 0 }} // aparece quando entra na tela
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // anima apenas 1 vez
    >
      {children}
    </motion.div>
  );
}
