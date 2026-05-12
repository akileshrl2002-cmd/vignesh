import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
