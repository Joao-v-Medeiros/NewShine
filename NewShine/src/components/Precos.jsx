import { useRef } from "react";
import { CYAN } from "../constants";
import { useInView } from "../hooks/useInView";

const planos = [
  {
    nome: "Básico",
    preco: "R$ 80",
    desc: "Para quem quer um carro limpo.",
    itens: [
      "Lavagem Simples",
      "Aspiração interna",
      "Limpeza de vidros",
      "Perfumação",
    ],
    destaque: false,
  },
  {
    nome: "Completo",
    preco: "R$ 180",
    desc: "O favorito dos nossos clientes.",
    itens: [
      "Lavagem Completa",
      "Higienização Interna",
      "Polimento leve",
      "Limpeza de motor",
      "Proteção de borrachas",
      "Perfumação premium",
    ],
    destaque: true,
  },
  {
    nome: "Premium",
    preco: "R$ 350",
    desc: "O melhor para quem exige mais.",
    itens: [
      "Tudo do Completo",
      "Polimento profissional",
      "Higienização profunda",
      "Correção de pintura",
      "Garantia de 6 meses",
    ],
    destaque: false,
  },
];

const avulsos = [
  { servico: "Lavagem Simples", preco: "R$ 80" },
  { servico: "Lavagem Completa", preco: "R$ 150" },
  { servico: "Higienização Interna", preco: "R$ 120" },
  { servico: "Polimento", preco: "R$ 200" },
];

function PlanoCard({ p }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 26,
        padding: "3rem",
        minHeight: 620,
        border: `1px solid ${p.destaque ? CYAN : "rgba(255,255,255,0.08)"}`,
        background: p.destaque ? `${CYAN}08` : "rgba(141, 1, 1, 0.02)",
        transform: p.destaque ? "scale(1.03)" : "none",
      }}
    >
      {p.destaque && (
        <div
          style={{
            position: "absolute",
            top: -16,
            left: "50%",
            transform: "translateX(-50%)",
            background: CYAN,
            color: "#000",
            fontSize: ".8rem",
            fontWeight: 700,
            padding: "6px 20px",
            borderRadius: 999,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Mais Popular
        </div>
      )}

      <div
        style={{
          color: p.destaque ? CYAN : "rgba(255,255,255,0.6)",
          fontWeight: 700,
          fontSize: "2rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        {p.nome}
      </div>

      <div
        style={{
          fontWeight: 900,
          fontSize: "5rem",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        {p.preco}
      </div>

      <p
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: "1.35rem",
          marginBottom: "2rem",
        }}
      >
        {p.desc}
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {p.itens.map((it, j) => (
          <li
            key={j}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "rgba(255,255,255,0.72)",
              fontSize: "1.45rem",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: p.destaque ? CYAN : "rgba(255,255,255,0.25)",
                flexShrink: 0,
              }}
            />
            {it}
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          document
            .getElementById("contato")
            .scrollIntoView({ behavior: "smooth" })
        }
        style={{
          width: "100%",
          padding: "1.2rem",
          borderRadius: 14,
          fontSize: "1.1rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.3s",
          background: p.destaque ? CYAN : "transparent",
          color: p.destaque ? "#000" : "rgba(255,255,255,0.6)",
          border: p.destaque ? "none" : "1px solid rgba(255,255,255,0.15)",
        }}
      >
        Escolher Plano
      </button>
    </div>
  );
}

export default function Precos() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      id="precos"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 10,
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1500,
          margin: "0 auto",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(2rem)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          <h2
            style={{
              color: "white",
              fontWeight: 900,
              fontSize: "clamp(3rem,5vw,5rem)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              margin: "0 0 1.2rem",
            }}
          >
            PLANOS EXCLUSIVOS
          </h2>

          <div
            style={{
              width: 90,
              height: 2,
              background: CYAN,
              margin: "0 auto",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
            gap: "2rem",
            marginBottom: "4rem",
            alignItems: "start",
          }}
        >
          {planos.map((p, i) => (
            <PlanoCard key={i} p={p} />
          ))}
        </div>

        <div
          style={{
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
            padding: "3rem",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "1rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Serviços Avulsos
          </div>

          {avulsos.map((a, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem 0",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "1.4rem",
                }}
              >
                {a.servico}
              </span>

              <span
                style={{
                  color: CYAN,
                  fontWeight: 700,
                  fontSize: "1.6rem",
                }}
              >
                {a.preco}
              </span>
            </div>
          ))}

          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "1rem",
              marginTop: "1.5rem",
              marginBottom: 0,
            }}
          >
            * Valores podem variar conforme tamanho e estado do veículo.
          </p>
        </div>
      </div>
    </section>
  );
}
