import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import "../styles/Servicos.css";
import polimentoImg from "../assets/polimento.jpg.png";
import higienizacaoImg from "../assets/higienizacao.jpg.png";
import lavagemSimplesImg from "../assets/lavagemsimples.jpg.png";
import lavagemCompletaImg from "../assets/lavagemcompleta.jpg.png";

const servicos = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <circle cx="24" cy="24" r="18" stroke="#00C2FF" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M16 24 Q24 14 32 24 Q24 34 16 24Z" stroke="#00C2FF" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="3" fill="#00C2FF" />
      </svg>
    ),
    title: "Polimento",
    desc: "Remoção de riscos e oxidação. Restauramos o brilho original com técnica e produtos de alta performance.",
    bg: "linear-gradient(160deg, #0a1a2e 0%, #0d2a1a 100%)",
    image: polimentoImg,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <rect x="10" y="14" width="28" height="22" rx="3" stroke="#00C2FF" strokeWidth="1.5" />
        <path d="M18 22 L24 28 L30 20" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 20 L6 20 M38 20 L42 20" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Higienização Interna",
    desc: "Limpeza profunda de bancos, tapetes e painel. Eliminamos odores, ácaros e bactérias.",
    bg: "linear-gradient(160deg, #0a0a1e 0%, #12102a 100%)",
    image: higienizacaoImg,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <path d="M24 8 Q36 16 36 28 Q36 38 24 40 Q12 38 12 28 Q12 16 24 8Z" stroke="#00C2FF" strokeWidth="1.5" fill="none" />
        <path d="M24 16 Q30 22 30 28 Q30 34 24 36 Q18 34 18 28 Q18 22 24 16Z" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.5" fill="none" />
        <circle cx="24" cy="28" r="3" fill="#00C2FF" opacity="0.5" />
      </svg>
    ),
    title: "Lavagem Simples",
    desc: "Lavagem externa com produtos premium. Preservando cada detalhe da pintura do seu veículo.",
    bg: "linear-gradient(160deg, #0a1a1e 0%, #0a2030 100%)",
    image: lavagemSimplesImg,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <path d="M8 24 Q8 14 24 10 Q40 14 40 24 Q40 36 24 40 Q8 36 8 24Z" stroke="#00C2FF" strokeWidth="1.5" fill="none" />
        <path d="M16 24 Q16 19 24 17 Q32 19 32 24 Q32 31 24 33 Q16 31 16 24Z" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
        <path d="M20 24 L23 27 L28 21" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Lavagem Completa",
    desc: "Interna e externa, motor, aspiração, perfumação e proteção de borrachas. O pacote mais completo.",
    bg: "linear-gradient(160deg, #1a0a1e 0%, #0a1020 100%)",
    image: lavagemCompletaImg,
  },
];

export default function Servicos() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="servicos" className="servicos-section" ref={ref}>
      <div
        className="servicos-container"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(2rem)" }}>

        <div className="servicos-header">
          <span className="servicos-label">O que fazemos</span>
          <h2 className="servicos-title">NOSSOS SERVIÇOS</h2>
          <div className="servicos-divider" />
        </div>

        <div className="servicos-grid">
          {servicos.map((s, i) => (
            <div
              key={i}
              className="service-card"
              style={{
                backgroundImage: `url(${s.image}), ${s.bg}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="service-card-overlay" />
              <div className="service-card-icon">{s.icon}</div>
              <div className="service-card-content">
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}