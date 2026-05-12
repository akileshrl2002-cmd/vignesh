import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    Icon: Briefcase,
    title: "Cloud / Technical Intern",
    org: "Kalanjiyam Technical Solutions",
    where: "Madurai",
    when: "Mar 2025 — May 2025",
    desc: "3-month internship focused on cloud and technical operations.",
  },
  {
    Icon: Briefcase,
    title: "Intern",
    org: "TVS Training and Service Limited",
    where: "Chennai",
    when: "Jul 2024 — Aug 2024",
    desc: "One month industrial training and hands-on technical exposure.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience" subtitle="Internships and milestones along the way.">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-10 md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "" : ""}`}
          >
            <div className={`md:${i % 2 ? "col-start-2" : "col-start-1 text-right"}`}>
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-[var(--gradient-primary)] glow ring-4 ring-background" />
              <div className="ml-12 md:ml-0 glass rounded-2xl p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <it.Icon className="h-3.5 w-3.5" /> {it.when}
                </div>
                <h4 className="mt-2 font-semibold">{it.title}</h4>
                <p className="text-sm text-primary">{it.org}</p>
                <p className="text-xs text-muted-foreground mt-1">{it.where}</p>
                <p className="text-sm text-muted-foreground mt-3">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-primary)] glow">
              <Award className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">Certifications</h3>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="font-medium text-sm">Introduction to IoT</div>
              <div className="text-xs text-muted-foreground mt-1">Cisco Networking Academy</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">Cloud Application Development</span>
                <span className="rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] px-2 py-0.5">In Progress</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Scope Tech Software Solutions, Madurai</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-primary)] glow">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">Education</h3>
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <div className="font-medium text-sm">B.E. — Electronics & Communication Engineering</div>
            <div className="text-xs text-muted-foreground mt-1">Government College of Engineering, Bodinayakanur</div>
            <div className="mt-3 flex items-center gap-3 text-xs">
              <span className="rounded-full bg-[var(--gradient-primary)]/20 border border-primary/30 px-2.5 py-1">CGPA 8.10 / 10</span>
              <span className="text-muted-foreground">2021 — 2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
