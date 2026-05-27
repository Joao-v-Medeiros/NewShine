import { useEffect, useRef } from "react";

export default function WaterDrops() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame;

    const drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initDrops = () => {
      drops.length = 0;
      for (let i = 0; i < 80; i++) {
        drops.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: Math.random() * 15 + 5,
          op: Math.random() * 0.1 + 0.04,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          hi: Math.random() > 0.6,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.save();
        ctx.globalAlpha = d.op;
        const g = ctx.createRadialGradient(d.x - d.r * 0.2, d.y - d.r * 0.25, 0, d.x, d.y, d.r);
        g.addColorStop(0, "rgba(0,194,255,0.65)");
        g.addColorStop(0.5, "rgba(13,27,42,0.4)");
        g.addColorStop(1, "rgba(0,194,255,0.0)");
        ctx.beginPath();
        ctx.ellipse(d.x, d.y, d.r, d.r * 1.2, Math.PI / 8, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        if (d.hi) {
          ctx.globalAlpha = d.op * 2.5;
          ctx.beginPath();
          ctx.ellipse(d.x - d.r * 0.28, d.y - d.r * 0.3, d.r * 0.2, d.r * 0.1, -0.6, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(200,240,255,0.85)";
          ctx.fill();
        }
        ctx.restore();
      });
      frame = requestAnimationFrame(draw);
    };

    resize();
    initDrops();
    draw();
    window.addEventListener("resize", () => { resize(); initDrops(); });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.85 }}
    />
  );
}