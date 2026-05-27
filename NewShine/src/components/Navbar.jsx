import { useState, useEffect } from "react";
import { CYAN } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Preços", href: "#precos" },
    { label: "Transformação", href: "#transformacao" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(8,12,16,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${CYAN}18` : "none",
        transition: "all 0.5s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "1.5rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: CYAN,
              boxShadow: `0 0 18px ${CYAN}`,
            }}
          />

          <span
            style={{
              fontWeight: 900,
              fontSize: "1.8rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            New<span style={{ color: CYAN }}>Shine</span>
          </span>
        </div>

        {/* DESKTOP */}
        <ul
          style={{
            display: "flex",
            gap: "3rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.62)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = CYAN;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255,255,255,0.62)";
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
          }}
          className="mobile-menu-btn"
        >
          <div
            style={{
              width: 30,
              height: 3,
              borderRadius: 999,
              background: "white",
              transition: "all 0.3s",
              transform: open
                ? "rotate(45deg) translateY(8px)"
                : "none",
            }}
          />

          <div
            style={{
              width: 30,
              height: 3,
              borderRadius: 999,
              background: "white",
              transition: "all 0.3s",
              opacity: open ? 0 : 1,
            }}
          />

          <div
            style={{
              width: 30,
              height: 3,
              borderRadius: 999,
              background: "white",
              transition: "all 0.3s",
              transform: open
                ? "rotate(-45deg) translateY(-8px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          style={{
            background: "rgba(8,12,16,0.98)",
            borderTop: `1px solid ${CYAN}18`,
            padding: "1.5rem 2rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                padding: "1.2rem 0",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}