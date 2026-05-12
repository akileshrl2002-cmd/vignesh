import { motion } from "framer-motion";
import { ArrowRight, Download, Cloud, Server, Database, Shield, Zap } from "lucide-react";
import vignesh from "@/assets/vignesh.png";

const badges = [
  { Icon: Server, label: "EC2", style: "top-4 -left-6" },
  { Icon: Database, label: "RDS", style: "top-20 -right-8" },
  { Icon: Shield, label: "IAM", style: "bottom-24 -left-10" },
  { Icon: Zap, label: "Lambda", style: "bottom-6 -right-4" },
  { Icon: Cloud, label: "S3", style: "top-1/2 -right-14" },
];

export function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Cloud Engineering roles
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text">Vignesh A</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-display text-foreground/90">
            AWS Cloud Engineer
          </p>
          <p className="mt-4 text-muted-foreground max-w-lg text-lg">
            Designing scalable, secure, and highly available cloud infrastructure on AWS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/Vignesh_Cloud_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 font-medium hover:bg-white/10 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "15+", v: "AWS Services" },
              { k: "4mo", v: "Internships" },
              { k: "8.10", v: "CGPA" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-2xl font-bold gradient-text">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative h-[420px] w-[340px] md:h-[480px] md:w-[380px]">
            <div className="absolute inset-0 rounded-[2rem] bg-[var(--gradient-primary)] blur-2xl opacity-50 animate-pulse-glow" />
            <div className="relative h-full w-full rounded-[2rem] glass overflow-hidden p-2 animate-pulse-glow">
              <img
                src={vignesh}
                alt="Vignesh A, AWS Cloud Engineer"
                className="h-full w-full object-cover rounded-[1.5rem]"
              />
            </div>
            {badges.map(({ Icon, label, style }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                className={`absolute ${style} animate-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className="glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-elegant">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
