import { useState, useRef, useEffect } from "react";
import { CYAN } from "../constants";
import { useInView } from "../hooks/useInView";

export default function AntesDepois() {
  const ref = useRef(null);
  const containerRef = useRef(null);

  const inView = useInView(ref);

  const [div, setDiv] = useState(50);
  const [drag, setDrag] = useState(false);

  const pct = (cx) => {
    if (!containerRef.current) return 50;

    const r = containerRef.current.getBoundingClientRect();

    return Math.max(
      5,
      Math.min(95, ((cx - r.left) / r.width) * 100)
    );
  };

  useEffect(() => {
    if (!drag) return;

    const onMove = (e) => setDiv(pct(e.clientX));
    const onUp = () => setDrag(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [drag]);

  return (
    <section
      id="transformacao"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 10,
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1350,
          margin: "0 auto",

          opacity: inView ? 1 : 0,

          transform: inView
            ? "translateY(0)"
            : "translateY(2rem)",

          transition:
            "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              color: "white",
              fontWeight: 900,
              fontSize: "clamp(2.8rem,5vw,4.5rem)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              margin: "0 0 1rem",
            }}
          >
            A TRANSFORMAÇÃO
          </h2>

          <div
            style={{
              width: 80,
              height: 2,
              background: CYAN,
              margin: "0 auto 1rem",
            }}
          />

          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "1rem",
            }}
          >
            Arraste para comparar
          </p>
        </div>

        {/* CARD */}
        <div
          ref={containerRef}
          onTouchMove={(e) =>
            setDiv(pct(e.touches[0].clientX))
          }
          style={{
            position: "relative",

            borderRadius: 26,

            overflow: "hidden",

            /* CARD MAIOR */
            height: "clamp(420px,55vw,720px)",

            cursor: "col-resize",

            userSelect: "none",

            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* DEPOIS */}
          <div
            style={{
              position: "absolute",
              inset: 0,

              background:
                "linear-gradient(135deg,#071a10,#0d2b1a,#040e0a)",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "5rem",
                  marginBottom: "1rem",
                }}
              >
                ✨
              </div>

              <div
                style={{
                  color: CYAN,
                  fontWeight: 700,
                  fontSize: "1.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Depois
              </div>

              <div
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                }}
              >
                Brilho restaurado
              </div>
            </div>
          </div>

          {/* ANTES */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              width: `${div}%`,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,

                /* EFEITO ORIGINAL */
                width: `${100 / (div / 100)}%`,

                background:
                  "linear-gradient(135deg,#1a0e04,#2a1a06,#0e0902)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  transform: `translateX(${-(50 - div / 2) * 0.4}px)`,
                }}
              >
                <div
                  style={{
                    fontSize: "5rem",
                    marginBottom: "1rem",
                    filter: "grayscale(1)",
                    opacity: 0.45,
                  }}
                >
                  🚗
                </div>

                <div
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 700,
                    fontSize: "1.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Antes
                </div>

                <div
                  style={{
                    color: "rgba(255,255,255,0.25)",
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Pintura opaca
                </div>
              </div>
            </div>
          </div>

          {/* LINHA */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${div}%`,
              width: 2,
              background: CYAN,
              zIndex: 20,
              boxShadow: `0 0 15px ${CYAN}`,
            }}
          />

          {/* BOTÃO */}
          <div
            onMouseDown={() => setDrag(true)}
            onTouchStart={() => setDrag(true)}
            style={{
              position: "absolute",
              top: "50%",
              left: `${div}%`,
              transform: "translate(-50%,-50%)",

              zIndex: 30,

              width: 70,
              height: 70,

              borderRadius: "50%",

              background: CYAN,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              cursor: "col-resize",

              boxShadow: `0 0 30px ${CYAN}55`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: 28,
                height: 28,
              }}
              fill="none"
            >
              <path
                d="M8 6L4 12L8 18M16 6L20 12L16 18"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* BADGES */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,

              zIndex: 10,

              background: "rgba(0,0,0,0.5)",

              backdropFilter: "blur(8px)",

              padding: "6px 18px",

              borderRadius: 999,

              color: "rgba(255,255,255,0.55)",

              fontSize: "0.9rem",

              letterSpacing: "0.15em",

              textTransform: "uppercase",
            }}
          >
            Antes
          </div>

          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,

              zIndex: 10,

              background: `${CYAN}22`,

              backdropFilter: "blur(8px)",

              padding: "6px 18px",

              borderRadius: 999,

              color: CYAN,

              fontSize: "0.9rem",

              letterSpacing: "0.15em",

              textTransform: "uppercase",
            }}
          >
            Depois
          </div>
        </div>
      </div>
    </section>
  );
}