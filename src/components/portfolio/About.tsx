import { motion } from "framer-motion";
import { Shield, DollarSign, Cog, TrendingUp } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { Icon: TrendingUp, title: "Scalable Architecture", desc: "Designing highly available, multi-AZ systems on AWS." },
  { Icon: Shield, title: "Cloud Security", desc: "IAM least-privilege, NACLs, security groups, encryption at rest & in transit." },
  { Icon: DollarSign, title: "Cost Optimization", desc: "Right-sizing, auto scaling, and tag-based cost governance." },
  { Icon: Cog, title: "Infrastructure Automation", desc: "CloudFormation IaC, repeatable & version-controlled deployments." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Built for the Cloud" subtitle="Results-driven AWS Cloud Engineer focused on building production-grade infrastructure.">
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-3xl p-7"
        >
          <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            Results-driven AWS Cloud Engineer with hands-on experience designing and deploying
            scalable, highly available cloud infrastructure on AWS. Proficient in EC2, VPC, S3,
            IAM, RDS, Lambda, CloudFormation, and Linux administration. Strong foundation in
            cloud security best practices and cost-optimized architecture design.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["AWS", "Linux", "IaC", "DevOps", "Networking"].map((t) => (
              <span key={t} className="rounded-full glass px-3 py-1 text-xs">{t}</span>
            ))}
          </div>
        </motion.div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-3xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-primary)] glow mb-4">
                <h.Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h4 className="font-semibold">{h.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
