import { useEffect, useState } from "react";

export function Background() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob animate-float" style={{ top: "-10%", left: "-5%", width: 480, height: 480, background: "oklch(0.65 0.22 295)" }} />
        <div className="blob animate-float" style={{ top: "30%", right: "-10%", width: 520, height: 520, background: "oklch(0.72 0.18 255)", animationDelay: "1.5s" }} />
        <div className="blob animate-float" style={{ bottom: "-15%", left: "20%", width: 460, height: 460, background: "oklch(0.78 0.14 210)", animationDelay: "3s" }} />
      </div>
      <div
        className="pointer-events-none fixed -z-10 h-[400px] w-[400px] rounded-full transition-transform duration-200"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
          background: "radial-gradient(circle, oklch(0.72 0.18 255 / 0.15), transparent 60%)",
        }}
      />
    </>
  );
}

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-[var(--gradient-primary)] transition-[width] duration-100"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}
