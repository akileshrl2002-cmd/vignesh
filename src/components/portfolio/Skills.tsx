import { motion } from "framer-motion";
import { Cloud, Server, Database, Shield, Zap, Globe, Activity, FileCode, Network, Bell, Mail, BarChart3, Lock, Layers, GitBranch } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "Cloud Platform",
    items: [{ Icon: Cloud, name: "Amazon Web Services", level: 90 }],
  },
  {
    title: "AWS Services",
    items: [
      { Icon: Server, name: "EC2", level: 90 },
      { Icon: Database, name: "S3", level: 88 },
      { Icon: Shield, name: "IAM", level: 85 },
      { Icon: Zap, name: "Lambda", level: 80 },
      { Icon: Database, name: "RDS", level: 82 },
      { Icon: Network, name: "VPC", level: 88 },
      { Icon: Globe, name: "Route 53", level: 78 },
      { Icon: Layers, name: "CloudFront", level: 75 },
      { Icon: FileCode, name: "CloudFormation", level: 80 },
      { Icon: GitBranch, name: "Auto Scaling", level: 82 },
      { Icon: Activity, name: "ALB", level: 80 },
      { Icon: Bell, name: "SNS", level: 75 },
      { Icon: Mail, name: "SES", level: 72 },
    ],
  },
  {
    title: "Monitoring & Logging",
    items: [
      { Icon: BarChart3, name: "CloudWatch", level: 85 },
      { Icon: Lock, name: "CloudTrail", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Services" subtitle="The AWS services I use to ship reliable cloud systems.">
      <div className="space-y-10">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{g.title}</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {g.items.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group glass rounded-2xl p-4 hover:bg-white/10 hover:shadow-glow transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 group-hover:bg-[var(--gradient-primary)] transition-all">
                      <s.Icon className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <span className="font-medium text-sm">{s.name}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                      className="h-full bg-[var(--gradient-primary)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
