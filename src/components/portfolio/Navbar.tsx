import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const mid = window.scrollY + window.innerHeight / 3;
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el) {
          const rect = (el as HTMLElement).offsetTop;
          if (mid >= rect) setActive(l.href);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass shadow-elegant" : ""
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-primary)] glow">
              <Cloud className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="text-lg">Vignesh A</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  active === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/5"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
            <a
              href="/Vignesh_Cloud_Resume.pdf"
              download
              className="ml-2 rounded-lg bg-[var(--gradient-primary)] px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Resume
            </a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-3 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Vignesh_Cloud_Resume.pdf"
              download
              className="rounded-lg bg-[var(--gradient-primary)] px-3 py-2 text-sm font-medium text-primary-foreground text-center"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
