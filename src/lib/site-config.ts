// Dados centrais do posto — edite aqui para atualizar o site inteiro.

export const siteConfig = {
  name: "Posto VN",
  shortName: "VN",
  tagline: "Energia que move Canindé",
  description:
    "Combustível de qualidade e loja de conveniência num posto novo, feito para quem não para em Canindé-CE.",

  address: {
    street: "Rua José Veloso Jucá, Nº 2986",
    neighborhood: "Palestina",
    city: "Canindé",
    state: "CE",
    full: "Rua José Veloso Jucá, Nº 2986 - Palestina, Canindé/CE",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Rua+Jos%C3%A9+Veloso+Juc%C3%A1,+2986+-+Palestina,+Canind%C3%A9+-+CE&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Veloso+Juc%C3%A1,+2986+-+Palestina,+Canind%C3%A9+-+CE",
  },

  contact: {
    whatsapp: "558591112552",
    whatsappDisplay: "(85) 9111-2552",
    whatsappMessage: "Olá! Vim pelo site do Posto VN e gostaria de saber mais.",
  },

  hours: {
    label: "Aberto todos os dias, 24 horas",
    detail: "Loja de conveniência: 06h às 23h",
  },

  // Selos de confiança exibidos no Hero.
  trustBadges: ["Aberto 24 horas", "Bombas aferidas", "Pix e cartão"],

  social: {
    instagram: "https://www.instagram.com/postovnce/",
  },

  fuels: [
    {
      name: "Gasolina Comum",
      note: "Alto desempenho e economia no dia a dia",
      color: "brand-yellow",
    },
    {
      name: "Gasolina Aditivada",
      note: "Proteção extra para o motor e mais autonomia",
      color: "brand-blue",
    },
    {
      name: "Etanol",
      note: "Combustível renovável, leve no bolso",
      color: "brand-yellow",
    },
    {
      name: "Diesel S10",
      note: "Potência e baixo teor de enxofre para sua frota",
      color: "brand-blue",
    },
  ],

  store: {
    title: "Loja de Conveniência",
    subtitle: "Tudo o que você precisa sem sair do posto",
    items: [
      {
        name: "Bebidas geladas",
        desc: "Cervejas, refrigerantes e água sempre no gelo",
      },
      {
        name: "Café expresso",
        desc: "Pausa rápida com café fresquinho na medida",
      },
      {
        name: "Snacks & lanches",
        desc: "Salgados, doces e opções rápidas para a estrada",
      },
      {
        name: "Ofertas da semana",
        desc: "Promoções toda semana em bebidas e conveniência",
      },
    ],
  },

  ledPanel: {
    title: "Anuncie no nosso painel de LED",
    subtitle:
      "Além de combustível, alugamos espaço no telão de LED do posto para divulgar sua empresa para quem passa por Palestina.",
    bullets: [
      {
        title: "Alta visibilidade",
        desc: "Painel grande, visível de longe, dia e noite.",
      },
      {
        title: "Fluxo constante",
        desc: "Centenas de carros e motos passam pelo posto todos os dias.",
      },
      {
        title: "Contrato flexível",
        desc: "Planos avulsos ou mensais, sob medida para o seu negócio.",
      },
    ],
    cta: "Quero anunciar no painel",
    whatsappMessage:
      "Olá! Vi que o Posto VN aluga espaço no painel de LED e quero saber mais sobre como anunciar minha empresa.",
  },

  highlights: [
    { value: "24h", label: "Funcionamento" },
    { value: "100%", label: "Bombas aferidas" },
    { value: "4", label: "Tipos de combustível" },
    { value: "5★", label: "Atendimento" },
  ],

  faq: {
    title: "Perguntas frequentes",
    subtitle: "Tudo o que você precisa saber antes de abastecer no VN.",
    items: [
      {
        q: "O posto funciona 24 horas mesmo?",
        a: "Sim! As bombas ficam abertas todos os dias, 24 horas por dia. A loja de conveniência funciona das 06h às 23h.",
      },
      {
        q: "Quais formas de pagamento vocês aceitam?",
        a: "Aceitamos Pix, cartões de crédito e débito e dinheiro. Rápido e sem complicação em qualquer bomba.",
      },
      {
        q: "Quais combustíveis estão disponíveis?",
        a: "Gasolina comum, gasolina aditivada, etanol e diesel S10 — todos de procedência e com bombas aferidas.",
      },
      {
        q: "Como faço para anunciar no painel de LED?",
        a: "É só chamar a gente no WhatsApp. Temos planos avulsos e mensais, sob medida para o seu negócio aparecer para quem passa por Palestina.",
      },
      {
        q: "Onde fica o posto?",
        a: 'Estamos na Rua José Veloso Jucá, Nº 2986, bairro Palestina, em Canindé/CE. Toque em "Como chegar" para abrir a rota no mapa.',
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
