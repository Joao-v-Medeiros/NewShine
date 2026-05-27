import { useRef } from "react";
import { CYAN } from "../constants";
import { useInView } from "../hooks/useInView";

const depoimentos = [
  {
    nome: "Rafael Mendes",
    cidade: "São Paulo, SP",
    texto:
      "Levei meu Civic pra higienização e fiquei impressionado com o resultado. Parecia carro zero. A atenção aos detalhes é outro nível, recomendo muito!",
    ini: "R",
  },
  {
    nome: "Juliana Costa",
    cidade: "Santo André, SP",
    texto:
      "Fiz o pacote completo e valeu cada centavo. Meu carro estava com um cheiro horrível e saiu perfumadinho, limpíssimo. Voltarei sempre!",
    ini: "J",
  },
  {
    nome: "Carlos Oliveira",
    cidade: "Guarulhos, SP",
    texto:
      "Profissionalismo do começo ao fim. Agendei pelo WhatsApp, fui atendido no horário e o polimento ficou impecável. Preço justo, serviço premium.",
    ini: "C",
  },
];

export default function Depoimentos() {
  const ref = useRef(null);

  const inView = useInView(ref);

  return (
    <section
      id="depoimentos"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 10,

        /* SECTION MAIOR */
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          /* CONTAINER MAIOR */
          maxWidth: 1400,

          margin: "0 auto",

          opacity: inView ? 1 : 0,

          transform: inView ? "translateY(0)" : "translateY(2rem)",

          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          {/* REMOVE ISSO SE QUISER */}
          {/* <div>Clientes reais</div> */}

          <h2
            style={{
              color: "white",
              fontWeight: 900,

              /* TITULO MAIOR */
              fontSize: "clamp(2.8rem,5vw,4.5rem)",

              letterSpacing: "0.05em",
              textTransform: "uppercase",

              margin: "0 0 1rem",
            }}
          >
            QUEM VIVE A EXPERIÊNCIA
          </h2>

          <div
            style={{
              width: 80,
              height: 2,
              background: CYAN,
              margin: "0 auto",
            }}
          />
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",

            gap: "2rem",
          }}
        >
          {depoimentos.map((d, i) => (
            <div
              key={i}
              style={{
                borderRadius: 24,

                border: "1px solid rgba(255,255,255,0.06)",

                background: "rgba(255,255,255,0.02)",

                /* CARD MAIOR */
                padding: "2.5rem",

                opacity: inView ? 1 : 0,

                transform: inView ? "translateY(0)" : "translateY(2rem)",

                transition: `opacity 0.6s ease ${
                  i * 120
                }ms, transform 0.6s ease ${i * 120}ms`,
              }}
            >
              {/* ESTRELAS */}
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  marginBottom: "1.75rem",
                }}
              >
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    style={{
                      color: CYAN,

                      /* ESTRELA MAIOR */
                      fontSize: "1.2rem",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* TEXO */}
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",

                  /* TEXTO MAIOR */
                  fontSize: "1.05rem",

                  lineHeight: 1.9,

                  fontStyle: "italic",

                  marginBottom: "2rem",
                }}
              >
                "{d.texto}"
              </p>

              {/* FOOTER */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                {/* FOTO */}
                <div
                  style={{
                    width: 58,
                    height: 58,

                    borderRadius: "50%",

                    background: CYAN,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "#000",

                    fontWeight: 700,

                    fontSize: "1.1rem",

                    flexShrink: 0,
                  }}
                >
                  {d.ini}
                </div>

                {/* INFO */}
                <div>
                  <div
                    style={{
                      color: "white",

                      fontWeight: 600,

                      fontSize: "1.1rem",

                      marginBottom: "0.25rem",
                    }}
                  >
                    {d.nome}
                  </div>

                  <div
                    style={{
                      color: "rgba(255,255,255,0.35)",

                      fontSize: "0.9rem",
                    }}
                  >
                    {d.cidade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
