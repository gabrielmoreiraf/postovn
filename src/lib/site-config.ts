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

  hours: {
    label: "Aberto todos os dias, 24 horas",
    detail: "Loja de conveniência: 07h às 21h",
  },

  // Selos de confiança exibidos no Hero.
  trustBadges: ["Aberto 24 horas", "Bombas aferidas", "Pix e cartão"],

  social: {
    instagram: "https://www.instagram.com/postovnce/",
  },

  pousada: {
    badge: "Também temos hospedagem",
    title: "Pousada VN",
    subtitle:
      "Quartos novos, limpos e aconchegantes bem ao lado do posto, a parada perfeita pra quem está de passagem por Canindé.",
    features: [
      "Quarto climatizado",
      "Estacionamento",
      "Wi-Fi",
      "Frigobar",
      "Televisão",
    ],
    whatsapp: "558581663728",
    whatsappMessage:
      "Olá! Vim pelo site do Posto VN e gostaria de fazer uma reserva na Pousada VN.",
    cta: "Reservar pelo WhatsApp",
    photos: [
      { src: "/DSC_1300.JPG.jpeg", alt: "Recepção da Pousada VN" },
      { src: "/DSC_1317.JPG.jpeg", alt: "Quarto da Pousada VN" },
      { src: "/DSC_1302.JPG.jpeg", alt: "Quarto amplo da Pousada VN" },
      { src: "/DSC_1303.JPG.jpeg", alt: "Acomodação da Pousada VN" },
      { src: "/DSC_1308.JPG.jpeg", alt: "Ambiente da Pousada VN" },
      { src: "/DSC_1318.JPG.jpeg", alt: "Detalhe da Pousada VN" },
    ],
  },

  fuels: [
    {
      name: "Gasolina Comum",
      note: "Alto desempenho e economia no dia a dia",
      color: "brand-yellow",
    },
    {
      name: "Etanol",
      note: "Combustível renovável, leve no bolso",
      color: "brand-blue",
    },
    {
      name: "Diesel S10",
      note: "Potência e baixo teor de enxofre para sua frota",
      color: "brand-yellow",
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

  convenios: {
    title: "Aceitamos pagamento por convênio com empresa",
    subtitle:
      "Agora ficou fácil abastecer o seu veículo, é só passar o cartão do seu convênio.",
    label: "Cartões aceitos",
    cards: [
      { name: "Good Card", src: "/good.png" },
      { name: "Ticket Log", src: "/tickect.png" },
      { name: "NEO", src: "/neo.jpg" },
      { name: "FitCard", src: "/fitcard.png" },
      { name: "Vale Card", src: "/valecard.webp" },
      { name: "Prime", src: "/prime.png" },
      { name: "Link Card", src: "/lnk.png" },
    ],
  },

  ledPanel: {
    badge: "Espaço publicitário",
    title: "Anuncie no nosso painel de LED",
    subtitle:
      "Um ponto estratégico de grande circulação no Bairro Palestina. Coloque a sua marca na frente de milhares de pessoas todos os dias.",

    location: {
      title: "Nosso ponto de exibição",
      text: "Localizado na Avenida José Veloso Jucá, 2986, em um ponto estratégico de grande circulação, próximo à estátua. Painel vertical de 1,5 x 3m, com exibição frente e verso, garantindo máxima visibilidade ao longo do dia,principalmente nos horários de pico.",
    },

    // Destaques rápidos do formato do anúncio.
    adFacts: [
      { value: "15s", label: "Vídeo por anúncio" },
      { value: "~300", label: "Exibições por dia" },
      { value: "2 lados", label: "Frente e verso" },
    ],

    reasons: {
      title: "Por que anunciar aqui?",
      items: [
        {
          title: "Localização estratégica",
          desc: "Ponto de alto fluxo diário, à beira da avenida e perto da estátua.",
        },
        {
          title: "Exibição frequente",
          desc: "Seu vídeo roda o dia todo, reforçando a sua marca a cada passagem.",
        },
        {
          title: "Ótimo custo-benefício",
          desc: "Visibilidade real por um valor que cabe no bolso do seu negócio.",
        },
      ],
    },

    specs: {
      title: "Especificações do painel",
      items: [
        "Resolução: 1500 x 3000 px",
        "Formato vertical (1,5m largura × 3m altura)",
        "Exibição frente e verso",
      ],
    },

    cta: "Quero anunciar no painel",
    whatsapp: "558591112552",
    whatsappMessage:
      "Olá! Vi que o Posto VN aluga espaço no painel de LED e quero saber mais sobre como anunciar minha empresa.",
  },

  highlights: [
    { value: "24h", label: "Funcionamento" },
    { value: "100%", label: "Bombas aferidas" },
    { value: "3", label: "Tipos de combustível" },
    { value: "5★", label: "Atendimento" },
  ],

  faq: {
    title: "Perguntas frequentes",
    subtitle: "Tudo o que você precisa saber antes de abastecer no VN.",
    items: [
      {
        q: "O posto funciona 24 horas mesmo?",
        a: "Sim! As bombas ficam abertas todos os dias, 24 horas por dia. A loja de conveniência funciona das 07h às 21h.",
      },
      {
        q: "Quais formas de pagamento vocês aceitam?",
        a: "Aceitamos Pix, cartões de crédito e débito e dinheiro. Rápido e sem complicação em qualquer bomba.",
      },
      {
        q: "Quais combustíveis estão disponíveis?",
        a: "Gasolina comum, etanol e diesel S10 — todos de procedência e com bombas aferidas.",
      },
      {
        q: "Como faço para anunciar no painel de LED?",
        a: "É só chamar a gente no direct do Instagram. Temos planos avulsos e mensais, sob medida para o seu negócio aparecer para quem passa por Palestina.",
      },
      {
        q: "Onde fica o posto?",
        a: 'Estamos na Rua José Veloso Jucá, Nº 2986, bairro Palestina, em Canindé/CE. Toque em "Como chegar" para abrir a rota no mapa.',
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
