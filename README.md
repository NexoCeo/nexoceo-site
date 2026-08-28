# NexoCEO

> **Tecnologia que conecta, automatiza e impulsiona seu negócio.**

Site institucional oficial da **NexoCEO**, desenvolvido com React, TypeScript e Vite.

A interface apresenta a identidade da marca, seus produtos, metodologia, diferenciais e canais de contato em uma experiência moderna, responsiva e otimizada para diferentes tamanhos de tela.

---

## 🌐 Site

**Produção:**  
https://www.nexoceo.com.br

---

## 🖥️ Prévia

<p align="center">
  <img
    src="./docs/preview.png"
    alt="Prévia do site NexoCEO"
    width="100%"
  />
</p>

---

## Sobre a NexoCEO

A **NexoCEO** desenvolve soluções digitais voltadas à organização, automação e crescimento de negócios.

A proposta da marca está baseada em três pilares:

**Conecte. Simplifique. Cresça.**

O site foi desenvolvido para apresentar essa proposta de maneira objetiva, destacando as soluções oferecidas pela empresa e facilitando o contato com potenciais clientes.

---

## Produtos apresentados

### NexoAgenda

Sistema de agendamento online voltado para profissionais, empresas e seus clientes.

Entre os recursos apresentados estão:

- Agenda inteligente
- Gestão de serviços
- Gestão de profissionais
- Lembretes
- Indicadores e relatórios

### NexoGestão

Plataforma voltada à gestão e organização de processos empresariais.

Entre os recursos apresentados estão:

- Gestão financeira
- Controle de equipes
- Relatórios personalizados
- Integrações

### NexoAnalytics

Solução voltada à análise de dados e acompanhamento de indicadores.

Entre os recursos apresentados estão:

- Dashboards
- Indicadores em tempo real
- Análise de desempenho
- Exportação de relatórios

---

## ✨ Funcionalidades do site

- Layout totalmente responsivo
- Navegação por seções
- Scroll suave entre conteúdos
- Menu adaptado para dispositivos móveis
- Hero Section com mockup da plataforma
- Apresentação dos produtos NexoCEO
- Seção institucional da marca
- Apresentação da metodologia de trabalho
- Área de diferenciais e recursos
- Depoimentos interativos
- Call-to-action para contato
- Links de telefone e e-mail
- Integração com redes sociais
- Estados de `hover` e `focus`
- Favicon personalizado
- Metadados para SEO e compartilhamento
- Suporte a PWA
- Layout adaptado para desktop, tablet e smartphone

---

## 🛠️ Tecnologias

O projeto utiliza:

- **React 19**
- **TypeScript**
- **Vite**
- **CSS Modules**
- **React Icons**
- **Vite PWA**
- **HTML5**
- **CSS3**

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
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── brand-mark/
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
│   │   │   └── footer/
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

## 🧩 Organização dos componentes

A página foi dividida em componentes independentes para facilitar manutenção e evolução.

### `HeroSection`

Responsável pela apresentação principal da NexoCEO.

Contém:

- título principal;
- descrição;
- CTAs;
- representação Cliente → NexoCEO → Produtor;
- mockup da plataforma.

### `ProductsSection`

Apresenta os principais produtos da empresa e seus respectivos recursos.

### `BrandSection`

Apresenta o conceito da identidade NexoCEO e os pilares da marca.

### `MethodologySection`

Explica o fluxo utilizado pela NexoCEO:

1. Entendimento
2. Planejamento
3. Desenvolvimento
4. Entrega e suporte

### `WhyNexoSection`

Destaca os diferenciais da plataforma e os benefícios para empresas e profissionais.

### `SocialProofSection`

Área dedicada à prova social, empresas atendidas e depoimentos.

### `ContactSection`

Call-to-action para incentivar contato com a equipe NexoCEO.

### `Header`

Responsável pela navegação principal da página e adaptação para dispositivos móveis.

### `Footer`

Reúne:

- navegação;
- produtos;
- contatos;
- redes sociais;
- informações institucionais.

---

## 🎨 Estilização

A aplicação utiliza **CSS Modules** para manter os estilos isolados por componente.

Exemplo:

```text
HeroSection.tsx
styles.module.css
```

Classes compartilhadas entre várias partes do site permanecem em:

```text
src/styles/global.css
```

Entre elas:

```css
.container
.section
.eyebrow
.section-heading
```

Essa organização reduz conflitos entre estilos e facilita a manutenção do projeto.

---

## 📱 Responsividade

O site foi desenvolvido para funcionar em diferentes resoluções.

O layout possui adaptações específicas para:

- Desktop
- Notebook
- Tablet
- Smartphone

Em telas menores, grids com múltiplas colunas são reorganizadas verticalmente e os elementos visuais passam a ocupar uma nova linha abaixo do conteúdo principal.

---

## 📲 PWA

O projeto possui suporte a **Progressive Web App (PWA)** através do `vite-plugin-pwa`.

O manifesto define:

- nome da aplicação;
- nome curto;
- descrição;
- cor do tema;
- ícones 192x192;
- ícones 512x512;
- suporte a ícone `maskable`;
- atualização automática.

---

## ▶️ Rodando o projeto localmente

Clone o repositório:

```bash
git clone https://github.com/NexoCeo/nexoceo-site.git
```

Entre na pasta:

```bash
cd nexoceo-site
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará o projeto localmente, normalmente em:

```text
http://localhost:5173
```

---

## 🏗️ Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos serão gerados em:

```text
dist/
```

Para testar o build localmente:

```bash
npm run preview
```

---

## Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Executa a validação TypeScript e gera o build de produção.

```bash
npm run preview
```

Executa localmente a versão gerada para produção.

---

## 🌐 Deploy

O site pode ser publicado em plataformas compatíveis com aplicações Vite, como a **Vercel**.

O domínio oficial utilizado pelo projeto é:

```text
https://www.nexoceo.com.br
```

---

## Objetivo do projeto

Este repositório representa o site institucional da NexoCEO.

A aplicação tem como objetivo apresentar a empresa, comunicar sua identidade, demonstrar suas soluções e servir como ponto de entrada para clientes interessados nos produtos e serviços da marca.

---

<p align="center">
  <strong>NexoCEO</strong>
  <br />
  Conecte. Simplifique. Cresça.
</p>
