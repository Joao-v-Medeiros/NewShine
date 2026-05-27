import { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";

import videoBg from "../assets/bmw.mp4";

export default function Hero() {
  const sectionRef = useRef(null);

  const [prog, setProg] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const total =
        sectionRef.current.offsetHeight -
        window.innerHeight;

      const value = Math.max(
        0,
        Math.min(1, -rect.top / total)
      );

      setProg(value);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section"
      id="hero"
    >
      <div className="hero-sticky">

        {/* VIDEO */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          style={{
            transform: `scale(${
              1 + prog * 0.12
            })`,
          }}
        >
          <source
            src={videoBg}
            type="video/mp4"
          />
        </video>

        {/* OVERLAY */}
        <div className="hero-overlay" />

        {/* GLOW */}
        <div
          className="hero-glow"
          style={{
            opacity: 0.7 - prog * 0.4,
          }}
        />

        {/* TEXTO FUNDO */}
        <div className="hero-brand-bg">
          NEW
          <span>SHINE</span>
        </div>

        {/* CONTEÚDO */}
        <div
          className="hero-content"
          style={{
            transform: `
              translateY(${prog * 90}px)
              scale(${1 - prog * 0.08})
            `,

            opacity: 1 - prog * 1.3,
          }}
        >
          <h1 className="hero-title">
            A PERFEIÇÃO 
            <br />

            <span>
              EM CADA GOTA
            </span>
          </h1>

          <p className="hero-text">
            Polimento técnico,
            vitrificação e
            detalhamento premium
            para carros que merecem
            presença.
          </p>

          <a
            href="#contato"
            className="hero-btn"
          >
            Agendar Horário
          </a>
        </div>

        {/* SCROLL */}
        <div
          className="hero-scroll"
          style={{
            opacity: 1 - prog * 5,
          }}
        >
          <span>
            Role para explorar
          </span>

          <div className="hero-line" />
        </div>
      </div>
    </section>
  );
}