# 🚗 NewShine: Estética Automotiva Premium

> **"A perfeição em cada gota."**

A **NewShine** é uma landing page profissional desenvolvida para uma estética automotiva, com foco em apresentar serviços, preços e diferenciais de forma visualmente impactante. O projeto combina animações modernas, design cinematográfico e uma experiência de usuário fluida para converter visitantes em clientes.

---

## 🎯 O Projeto

A aplicação foi construída com foco em **Alto Impacto Visual**, utilizando animações de scroll, vídeo de fundo, efeitos de clip-path e uma identidade visual escura e premium que transmite confiança e sofisticação.

### 🚀 Funcionalidades Principais

* **Hero com Vídeo:** Vídeo de fundo cinematográfico com efeito de zoom progressivo no scroll.
* **Animação Clip-Path:** Cards de serviços que expandem suavemente conforme o usuário rola a página.
* **Pingos d'Água Animados:** Canvas com gotas de água em movimento espalhadas pelo fundo da página.
* **Antes e Depois Interativo:** Divisor arrastável para comparação visual de resultados.
* **Planos e Preços:** Tabela de planos com hover animado e destaque no plano mais popular.
* **Depoimentos:** Cards de clientes reais com animação de entrada.
* **Totalmente Responsivo:** Layout adaptado para desktop e mobile.

---

## 🛠️ Stack Técnica

* **Framework:** React 18 + Vite
* **Estilização:** CSS Modular com variáveis globais
* **Animações:** Motion (Framer Motion) + CSS Animations
* **Scroll Suave:** Lenis
* **Deploy:** Vercel com CI/CD automático via GitHub
* **Design:** Prototipagem de alta fidelidade via Figma

---

## 📂 Arquitetura do Projeto

```text
📁 NewShine/
│
├── 📁 public/                     # Arquivos públicos estáticos
│   └── 📁 img/                    # Imagens dos cards de serviço
│
├── 📁 src/                        # Código fonte principal
│   │
│   ├── 📁 assets/                 # Vídeo, imagens e ícones
│   │   └── 📄 bmw.mp4             # Vídeo de fundo do Hero
│   │   └── 📄 polimento.jpg.png
│   │   └── 📄 higienizacao.jpg.png
│   │   └── 📄 lavagemsimples.jpg.png
│   │   └── 📄 lavagemcompleta.jpg.png
│   │
│   ├── 📁 components/             # Componentes React
│   │   ├── 📄 Navbar.jsx          # Barra de navegação fixa
│   │   ├── 📄 Hero.jsx            # Seção principal com vídeo
│   │   ├── 📄 WaterDrops.jsx      # Canvas de pingos d'água
│   │   ├── 📄 Servicos.jsx        # Cards de serviços com clip-path
│   │   ├── 📄 Precos.jsx          # Planos e tabela de preços
│   │   ├── 📄 AntesDepois.jsx     # Comparador drag interativo
│   │   ├── 📄 Depoimentos.jsx     # Depoimentos de clientes
│   │   ├── 📄 CTAFinal.jsx        # Chamada para ação + WhatsApp
│   │   └── 📄 Footer.jsx          # Rodapé com links e redes sociais
│   │
│   ├── 📁 hooks/                  # Hooks customizados
│   │   └── 📄 useInView.js        # Hook de detecção de visibilidade
│   │
│   ├── 📁 styles/                 # CSS modular por componente
│   │   ├── 📄 global.css          # Reset e variáveis globais
│   │   ├── 📄 Navbar.css
│   │   ├── 📄 Hero.css
│   │   ├── 📄 Servicos.css
│   │   ├── 📄 Precos.css
│   │   ├── 📄 AntesDepois.css
│   │   ├── 📄 Depoimentos.css
│   │   └── 📄 Footer.css
│   │
│   ├── 📄 constants.js            # Cores e variáveis globais JS
│   ├── 📄 App.jsx                 # Componente raiz
│   └── 📄 main.jsx                # Entry point da aplicação
│
├── 📄 index.html                  # HTML base
├── 📄 vite.config.js              # Configuração do Vite
└── 📄 package.json                # Dependências do projeto
```

---

## 🔗 Links Úteis

* **Deploy em Produção:** [new-shine-g37u.vercel.app](https://new-shine-g37u.vercel.app)
* **Protótipo Figma:** [Acesse o Design](https://www.figma.com/design/KQRk7Iy4Zge35FkNOOWYAz/Sem-título?node-id=15-2&p=f&t=kKLpM4Dpq6b89WXT-0)

---

## 👤 Desenvolvedor

| Nome | Função | LinkedIn |
| --- | --- | --- |
| **João Victor Santos** | Frontend Developer | [linkedin.com/in/joaovictorsanmed](https://www.linkedin.com/in/joaovictorsanmed) |

---

## ▶️ Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/NewShine.git
```

2. Instale as dependências:
```bash
npm install
```

3. Rode em desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador: `http://localhost:5173`

---

## 📦 Build para produção

```bash
npm run build
```

Todo commit na branch `main` gera um deploy automático na Vercel.

---

*Este projeto foi desenvolvido como projeto de UC3 — PROA, primeiro semestre 2026.*
