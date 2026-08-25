import { useEffect, useRef } from "react";

/**
 * Signature visual: a quiet network of nodes and connection lines that
 * drifts behind the hero content. Density and motion scale down on
 * smaller viewports and are frozen entirely under prefers-reduced-motion.
 */
export default function TechBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let nodes = [];
    let mouse = { x: -9999, y: -9999 };

    const getDensity = () => {
      const w = window.innerWidth;
      if (w < 640) return 0.00009; // mobile: fewer particles
      if (w < 1024) return 0.00012;
      return 0.00016;
    };

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor(width * height * getDensity()));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const linkDist = 130;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          // gentle attraction toward cursor for a subtle "alive" feel
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160) {
            n.x -= dx * 0.0008;
            n.y -= dy * 0.0008;
          }
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const o = nodes[j];
          const dx = n.x - o.x;
          const dy = n.y - o.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const opacity = (1 - dist / linkDist) * 0.16;
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(147, 197, 253, 0.55)";
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const handleResize = () => setup();
    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    setup();
    draw();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
