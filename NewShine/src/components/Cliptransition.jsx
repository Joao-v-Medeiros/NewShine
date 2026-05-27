import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import videoBg from "../assets/bmw.mp4";

const SECTION_HEIGHT = 1400;

export default function ClipTransition() {
  const sectionRef = useRef(null);

  const { scrollY } = useScroll();

  // Clip-path: começa como um quadrado pequeno no centro e expande para full screen
  const clip1 = useTransform(scrollY, [300, 1600], [22, 0]);
  const clip2 = useTransform(scrollY, [300, 1600], [78, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Zoom no vídeo conforme expande
  const scale = useTransform(scrollY, [300, 1800], [1.4, 1.0]);

  // Fade out no final antes de entrar nos serviços
  const opacity = useTransform(scrollY, [1400, 1800], [1, 0]);

  // Texto centralizado que some conforme expande
  const textOpacity = useTransform(scrollY, [300, 700], [1, 0]);
  const textScale = useTransform(scrollY, [300, 700], [1, 0.85]);

  return (
    <section
      ref={sectionRef}
      style={{
        height: `calc(${SECTION_HEIGHT}px + 100vh)`,
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Vídeo com clip-path animado */}
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          clipPath,
          opacity,
        }}
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            scale,
            filter: "brightness(0.5) contrast(1.1) saturate(1.2)",
          }}
        >
          <source src={videoBg} type="video/mp4" />
        </motion.video>

        {/* Overlay escuro */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
          zIndex: 1,
        }} />

        {/* Texto central que some */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            opacity: textOpacity,
            scale: textScale,
            textAlign: "center",
            padding: "0 2rem",
          }}
        >
          <div style={{
            color: "#00C2FF",
            fontSize: "0.85rem",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}>
            Cada detalhe importa
          </div>
          <h2 style={{
            color: "white",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            lineHeight: 1,
            textShadow: "0 0 60px rgba(0,194,255,0.3)",
            margin: 0,
          }}>
            SEU CARRO.<br />
            <span style={{ color: "#00C2FF", textShadow: "0 0 40px rgba(0,194,255,0.7)" }}>
              RENOVADO.
            </span>
          </h2>
        </motion.div>
      </motion.div>

      {/* Fade para preto no final */}
      <div style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        height: "20rem",
        background: "linear-gradient(to bottom, transparent, #080C10)",
        pointerEvents: "none",
        zIndex: 11,
        marginTop: "-20rem",
      }} />
    </section>
  );
}