# NexoCEO Site

> **Tecnologia que conecta, automatiza e impulsiona seu negócio.**

Site institucional oficial da **NexoCEO**, desenvolvido com React, TypeScript e Vite.

A aplicação apresenta a identidade da marca, seus produtos, metodologia, diferenciais e canais de contato em uma interface moderna e responsiva.

---

## 🌐 Site

**Produção:**

https://www.nexoceo.com.br

---

## 🖥️ Prévia do site

<p align="center">
  <img
    src="./docs/preview.png"
    alt="Prévia do site NexoCEO"
    width="100%"
  />
</p>

---

## ✨ Principais recursos

- Layout responsivo para desktop, tablet e smartphone
- Navegação entre seções com scroll suave
- Menu responsivo
- Hero Section com apresentação da NexoCEO
- Apresentação dos produtos
- Seção institucional da marca
- Metodologia de trabalho
- Diferenciais da plataforma
- Depoimentos interativos
- Call-to-action para contato
- Links de telefone, e-mail e redes sociais
- Estados de hover e focus
- CSS Modules
- Favicon personalizado
- Metadados para SEO
- Suporte a PWA

---

## 🛠️ Tecnologias

- React
- TypeScript
- Vite
- CSS Modules
- React Icons
- Vite PWA
- HTML5
- CSS3

---

## 📁 Estrutura do projeto

```text
nexoceo-site/
│
├── public/
│   ├── favicon.png
│   ├── pwa-192x192.png
│   └── pwa-512x512.png
│
├── docs/
│   └── preview.png
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── brand-mark/
│   │   │   │   ├── BrandMark.tsx
│   │   │   │   └── styles.module.css
│   │   │   │
│   │   │   └── Icon.tsx
│   │   │
│   │   ├── data/
│   │   │   ├── appointments.ts
│   │   │   ├── methodology.ts
│   │   │   ├── navigation.ts
│   │   │   ├── products.ts
│   │   │   ├── testimonials.ts
│   │   │   └── whyFeatures.ts
│   │   │
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── styles.module.css
│   │   │   │
│   │   │   └── footer/
│   │   │       ├── Footer.tsx
│   │   │       └── styles.module.css
│   │   │
│   │   └── sections/
│   │       ├── brand-section/
│   │       ├── contact-section/
│   │       ├── hero-section/
│   │       ├── methodology-section/
│   │       ├── products-section/
│   │       ├── social-proof-section/
│   │       └── why-nexo-section/
│   │
│   ├── context/
│   │   └── ThemeContext.tsx
│   │
│   ├── images/
│   │   └── hero-mockup.png
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   └── scrollToSection.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

As principais seções são:

- Hero
- Produtos
- Marca
- Metodologia
- Diferenciais
- Depoimentos
- Contato

---

## NexoCEO

**Conecte. Simplifique. Cresça.**
