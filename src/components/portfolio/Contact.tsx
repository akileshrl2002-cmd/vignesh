import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, Github, Cloud } from "lucide-react";
import { Section } from "./Section";

const channels = [
  { Icon: Mail, label: "Email", value: "avickyvaisu22@gmail.com", href: "mailto:avickyvaisu22@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91 6374658755", href: "tel:+916374658755" },
  { Icon: Linkedin, label: "LinkedIn", value: "vignesh-a-751917325", href: "https://www.linkedin.com/in/vignesh-a-751917325" },
  { Icon: MapPin, label: "Location", value: "Madurai, India" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:avickyvaisu22@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build on the cloud" subtitle="Open to Cloud Engineering, DevOps, and SRE opportunities.">
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 glass rounded-2xl p-4 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-primary)] glow">
                <c.Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="font-medium text-sm truncate">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:border-primary/60 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:border-primary/60 transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:border-primary/60 transition-colors resize-none"
              placeholder="Tell me about the role or project..."
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-6 py-3 font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            <Send className="h-4 w-4" />
            {sent ? "Opening your email..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-primary)] glow">
            <Cloud className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-display font-semibold">Vignesh A</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vignesh A. Crafted with cloud-grade care.</p>
        <div className="flex gap-2">
          {[
            { Icon: Github, href: "#" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/vignesh-a-751917325" },
            { Icon: Mail, href: "mailto:avickyvaisu22@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-[var(--gradient-primary)] hover:text-primary-foreground transition-all">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
