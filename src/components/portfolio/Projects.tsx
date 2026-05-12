import { motion } from "framer-motion";
import { Github, Network, ExternalLink, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

const features = [
  "Production-grade 3-tier AWS architecture",
  "Public/private subnets across multiple AZs",
  "Security Groups & NACLs with least-privilege",
  "EC2 behind ALB with Auto Scaling Groups",
  "Multi-AZ Amazon RDS with automated backups",
  "Route 53 + SSL/TLS certificates via ACM",
  "CloudWatch dashboards & alarms",
  "Encrypted S3 with restricted public access",
];

const stack = ["VPC", "EC2", "RDS", "ALB", "Auto Scaling", "S3", "CloudWatch", "Route 53", "ACM"];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured project" title="Production AWS Architecture" subtitle="A real-world build showcasing scalable, secure, multi-AZ design.">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass rounded-3xl overflow-hidden hover:shadow-glow transition-shadow"
      >
        <div className="grid lg:grid-cols-2">
          {/* Visual */}
          <div className="relative p-8 lg:p-10 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent overflow-hidden min-h-[360px]">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative h-full flex flex-col justify-between gap-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full glass px-3 py-1 text-xs">Featured</span>
                <Network className="h-5 w-5 text-primary" />
              </div>
              {/* Architecture diagram */}
              <div className="space-y-3">
                {[
                  { tier: "Web Tier", items: ["Route 53", "CloudFront", "ALB"] },
                  { tier: "App Tier", items: ["EC2 Auto Scaling", "Private Subnets"] },
                  { tier: "Data Tier", items: ["RDS Multi-AZ", "S3 Encrypted"] },
                ].map((row, i) => (
                  <motion.div
                    key={row.tier}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="glass rounded-2xl p-4"
                  >
                    <div className="text-xs text-muted-foreground mb-2">{row.tier}</div>
                    <div className="flex flex-wrap gap-2">
                      {row.items.map((it) => (
                        <span key={it} className="rounded-lg bg-[var(--gradient-primary)]/20 border border-primary/30 px-2.5 py-1 text-xs font-medium">
                          {it}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <h3 className="text-2xl md:text-3xl font-bold">AWS 3-Tier Web Application Architecture</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {stack.map((s) => (
                <span key={s} className="rounded-full glass px-2.5 py-1 text-xs">{s}</span>
              ))}
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10">
                <Network className="h-4 w-4" /> Architecture
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground">
                Live <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </Section>
  );
}
