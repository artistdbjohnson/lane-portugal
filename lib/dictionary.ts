"use client";

import { useLocale, type Locale } from "./prefs";

export type Leaf = {
  title: string;
  body?: string[];
  bullets?: string[];
  note?: string;
  children?: Leaf[];
};

export type Dict = {
  nav: { href: string; label: string }[];
  cta: string;
  localeLabel: string;
  themeToDark: string;
  themeToLight: string;
  menuOpen: string;
  menuClose: string;
  heroKicker: string;
  heroLine: string;
  heroItalic: string;
  shortcuts: { href: string; label: string }[];
  searchLive: string;
  offMarketJump: string;
  weekKicker: string;
  propertiesKicker: string;
  propertiesTitle: string;
  premiumKicker: string;
  premiumTitle: string;
  premiumLead: string;
  devKicker: string;
  devTitle: string;
  devBody: string;
  devLink: string;
  zonesKicker: string;
  zonesTitle: string;
  zonesCaption: string;
  zones: { href: string; label: string }[];
  cascaisKicker: string;
  cascaisTitle: string;
  cascais: string[];
  offKicker: string;
  offTitle: string;
  offBody: string[];
  offZone: string;
  offType: string;
  offBudget: string;
  offMust: string;
  offSend: string;
  offError: string;
  offSubject: string;
  rivieraKicker: string;
  rivieraTitle: string;
  riviera: string[];
  rivieraCaption: string;
  ledgerKicker: string;
  ledgerTitle: string;
  ledgerIntro: string;
  ledger: Leaf[];
  disclaimer: string;
  aboutKicker: string;
  aboutTitle: string;
  about: string[];
  missionLabel: string;
  mission: string;
  visionLabel: string;
  vision: string;
  stats: { value: string; label: string }[];
  founders: string;
  recruitKicker: string;
  recruitTitle: string;
  recruit: string[];
  recruitSeek: string;
  recruitSeekItems: string[];
  recruitOffer: string;
  recruitOfferItems: string[];
  recruitClose: string;
  recruitSend: string;
  newsKicker: string;
  newsTitle: string;
  newsNote: string;
  newsEmail: string;
  newsConsent: string;
  newsTerms: string;
  newsPrivacy: string;
  newsSend: string;
  newsError: string;
  newsSubject: string;
  contactKicker: string;
  contactTitle: string;
  contact: string[];
  contactWrite: string;
  contactName: string;
  contactMessage: string;
  contactSend: string;
  addressLabel: string;
  address: string[];
  phoneLabel: string;
  emailLabel: string;
  mapsLabel: string;
  footerLocations: string;
  footerNav: string;
  footerVisit: string;
  built: string;
  study: string;
  legal: string;
  newPrice: string;
  viewListing: string;
  refLabel: string;
};

const zones = [
  ["/casas-apartamentos-cascais", "Cascais"],
  ["/casas-apartamentos-lisboa", "Lisboa"],
  ["/casas-apartamentos-setubal", "Setúbal"],
  ["/casas-apartamentos-porto", "Porto"],
  ["/casas-apartamentos-sintra", "Sintra"],
  ["/casas-apartamentos-lapa", "Lapa"],
  ["/casas-apartamentos-parque-das-nacoes", "Parque das Nações"],
  ["/casas-apartamentos-penha-de-franca", "Penha de França"],
  ["/casas-apartamentos-principe-real", "Príncipe Real"],
  ["/casas-apartamentos-santa-maria-maior", "Santa Maria Maior"],
  ["/casas-apartamentos-campolide", "Campolide"],
] as const;

const pt: Dict = {
  nav: [
    { href: "#propriedades", label: "Propriedades" },
    { href: "#premium", label: "Premium" },
    { href: "#empreendimentos", label: "Empreendimentos" },
    { href: "#investir", label: "Investir em Portugal" },
    { href: "#empresa", label: "Empresa" },
    { href: "#contactos", label: "Contactos" },
  ],
  cta: "Pesquise agora",
  localeLabel: "Idioma",
  themeToDark: "Tema escuro",
  themeToLight: "Tema claro",
  menuOpen: "Abrir menu",
  menuClose: "Fechar menu",
  heroKicker: "Lane Exclusive Real Estate",
  heroLine: "A chave para o seu refúgio exclusivo",
  heroItalic: "refúgio",
  shortcuts: [
    { href: "/comprar/venda", label: "Comprar" },
    { href: "/arrendar/arrendamento", label: "Arrendar" },
    { href: "/premium", label: "Imóveis de Luxo" },
    { href: "/imoveis-off-market", label: "Imóveis Off-Market" },
  ],
  searchLive: "/procuro-imovel",
  offMarketJump: "Brief off-market",
  weekKicker: "Propriedade da semana",
  propertiesKicker: "Selecção",
  propertiesTitle: "Imóveis em destaque",
  premiumKicker: "Premium",
  premiumTitle: "Casas e mansões de luxo em Portugal",
  premiumLead: "Casas e mansões de luxo à venda em Portugal.",
  devKicker: "Empreendimentos",
  devTitle: "Empreendimentos exclusivos em Cascais, Lisboa e Setúbal",
  devBody: "A listagem de empreendimentos é publicada na Lane.",
  devLink: "Ver empreendimentos",
  zonesKicker: "Zonas de eleição",
  zonesTitle: "Conheça os imóveis das nossas zonas de eleição!",
  zonesCaption: "Praias de areia branca, campos de golfe reconhecidos mundialmente, gastronomia de excelência!",
  zones: zones.map(([href, label]) => ({ href, label })),
  cascaisKicker: "A costa",
  cascaisTitle: "Viver em Cascais",
  cascais: [
    "Cascais oferece uma combinação única de qualidade de vida, proximidade ao mar e acesso rápido a Lisboa. Se procura comprar casa em Cascais, encontrará casas e apartamentos à venda em zonas residenciais e premium, como Estoril, Quinta da Marinha e Guia.",
    "O concelho destaca-se pela segurança, escolas internacionais, espaços verdes e um estilo de vida sofisticado, ideal para viver, investir ou adquirir uma segunda habitação. Escolher a zona certa é essencial, e a curadoria Lane ajuda a identificar as melhores oportunidades em Cascais, ajustadas ao seu perfil e objetivos.",
  ],
  offKicker: "Fora de mercado",
  offTitle: "Não encontrou o que procura?",
  offBody: [
    "Nem sempre o melhor imóvel está visível à primeira pesquisa — e, por vezes, as melhores oportunidades nem chegam a ser publicadas.",
    "Diga-nos o que procura (zona, tipologia, orçamento e o que é “obrigatório” para si) e a equipa Lane trata do resto.",
  ],
  offZone: "Zona",
  offType: "Tipologia",
  offBudget: "Orçamento",
  offMust: "Obrigatório",
  offSend: "Enviar brief",
  offError: "Preencha zona, tipologia, orçamento e o que é obrigatório.",
  offSubject: "Brief off-market — Lane Portugal",
  rivieraKicker: "Investir em Portugal",
  rivieraTitle: "A Riviera Portuguesa",
  riviera: [
    "Considerada por muitos como a Riviera Portuguesa, a região a oeste de Lisboa, que inclui as cidades costeiras de Cascais e Estoril, é o destino de luxo escolhido pela elite portuguesa e de outros países.",
    "Esta é uma das zonas mais valorizadas da Europa, que oferece paisagens deslumbrantes, uma agenda cultural rica (exposições, festivais gastronómicos, competições desportivas, eventos náuticos, festas de música, etc.), um património arquitetónico imenso e uma elevada qualidade de vida.",
    "Quem procura fazer exercício físico ao ar livre ficará deslumbrado com a beleza do paredão entre Cascais e São João do Estoril, ou o percurso entre o centro de Cascais e o Guincho.",
    "O clima ameno durante todo o ano, as praias de areia branca e águas cristalinas, uma das melhores marinas do sul da Europa, campos de golfe reconhecidos mundialmente, uma gastronomia de excelência com grande variedade de produtos regionais e uma oferta de instituições de ensino internacionais, são razões mais que suficientes que fazem de Cascais e Estoril excelentes lugares para investir.",
  ],
  rivieraCaption: "Cascais e Estoril - A Riviera Portuguesa",
  ledgerKicker: "Guia do comprador",
  ledgerTitle: "Comprar casa, passo a passo",
  ledgerIntro:
    "Encontrou finalmente a casa dos seus sonhos? A sua nova casa de férias? Ou talvez um novo imóvel para investimento? Para o guiar neste processo, partilhamos consigo quais os 6 passos a ter em consideração, antes e após a compra.",
  ledger: [
    {
      title: "Passo 1 — Obtenção do Número de Identificação Fiscal (NIF)",
      body: [
        "Para adquirir um imóvel em Portugal, uma vez que esse processo está sujeito ao pagamento de impostos, é necessário que se inscreva junto da Administração Fiscal, afim de obter o respetivo número de identificação fiscal.",
        "O número de identificação fiscal é um número destinado exclusivamente ao tratamento de informação de índole fiscal e aduaneira, podendo ser solicitado por qualquer cidadão, residente ou não em território nacional, em qualquer momento.",
        "Poderá obter o mesmo em qualquer balcão de atendimento da Autoridade Tributária e Aduaneira, ou nos balcões das lojas de cidadão que disponibilizam esse serviço.",
      ],
      children: [
        {
          title: "Se é cidadão europeu",
          bullets: [
            "Documento de identificação civil ou passaporte",
            "Comprovativo de morada no país de origem (fatura de água, eletricidade, gás, etc…)",
          ],
        },
        {
          title: "Se é cidadão de um país terceiro",
          bullets: [
            "Passaporte",
            "Comprovativo de morada no país de origem (fatura de água, eletricidade, gás, etc…)",
            "Obrigatório ter um representante fiscal (poderá ser qualquer cidadão português ou empresa com sede em Portugal)",
          ],
        },
      ],
    },
    {
      title: "Passo 2 — Documentação Legal",
      body: [
        "Antes de dar início ao processo de compra do seu novo imóvel, é necessário que tenha em atenção toda a documentação legal respeitante ao imóvel, bem como à legitimidade do vendedor. Na lista que se segue apresentamos os documentos a ter em conta:",
      ],
      children: [
        {
          title: "i) Caderneta Predial",
          body: [
            "Documento emitido pela Autoridade Tributária e Aduaneira, onde constam, entre outros, os seguintes dados: a identificação e localização do imóvel, as áreas do imóvel, o valor patrimonial tributário (para efeitos de impostos), informação sobre eventuais isenções vigentes, e o/os titulares, dependendo da situação.",
          ],
        },
        {
          title: "ii) Certidão do Registo Predial (ou certidão de teor)",
          body: [
            "Documento emitido pela Conservatória do Registo Predial que contém informação sobre: a localização e composição do imóvel, os titulares, se recaem sobre o imóvel quaisquer ónus ou encargos (hipoteca, penhora, servidões, usufrutos, etc…).",
          ],
        },
        {
          title: "iii) Licença de Utilização",
          body: [
            "Documento emitido pela Câmara Municipal onde o imóvel se localiza, que atesta que o imóvel foi inspecionado e está nas condições exigidas por lei para ser habitado. Caso se trate de um imóvel de construção anterior a 1951, este documento não é obrigatório.",
          ],
        },
        {
          title: "iv) Certificado energético",
          body: [
            "Documento emitido por técnicos autorizados pela ADENE (Agência Nacional de Energia), que avalia a eficácia energética de um imóvel numa escala de A+ (muito eficiente) a F (pouco eficiente).",
          ],
        },
        {
          title: "v) Ficha técnica de habitação",
          body: [
            "Documento descritivo das principais caraterísticas técnicas e funcionais de um imóvel. É obrigatório para imóveis que tenham sido submetidos a obras de reconstrução, ampliação ou alteração após 30 de março de 2004.",
          ],
        },
        {
          title: "vi) Declaração de não dívida ao condomínio",
          body: [
            "Se pretende adquirir um imóvel que se encontra inserido num prédio em regime de propriedade horizontal, poderá solicitar este documento ao proprietário, afim de garantir que não existem dívidas ao condomínio até aquela data.",
          ],
        },
      ],
    },
    {
      title: "Passo 3 — O Contrato Promessa de Compra e Venda",
      body: [
        "Após a verificação de toda a documentação legal do imóvel e legitimidade do vendedor, passamos ao próximo passo: a assinatura do contrato promessa de compra e venda. Este contrato é imprescindível, apesar de não ser obrigatório, para assegurar a compra do seu futuro imóvel. Trata-se de um documento assinado por ambas as partes (comprador e vendedor) que regula e salvaguarda os direitos e deveres de cada um até à data da celebração do contrato definitivo.",
        "Do contrato promessa de compra e venda deverão constar os seguintes elementos:",
      ],
      bullets: [
        "Identificação das partes, (nome completo, estado civil, nº de identificação civil, nº de identificação fiscal e morada);",
        "Identificação do imóvel (incluindo a existência de partes afetas ao imóvel, tais como garagem e arrecadação, por exemplo, descrição predial, inscrição matricial e a respetiva licença de utilização (se aplicável);",
        "Indicação se sobre o imóvel recaem quaisquer ónus e encargos;",
        "Preço da compra e venda e forma de pagamento;",
        "Indicação da quantia dada a título de sinal (normalmente entre 15% e 20% do valor de aquisição);",
        "Indicação que o imóvel será transmitido livre de quaisquer ónus ou encargos;",
        "Prazo máximo para a celebração do contrato definitivo;",
        "Indicação de sanções a aplicar caso o contrato promessa de compra e venda não venha a ser cumprido por qualquer uma das partes.",
      ],
      note: "Nota: O contrato promessa de compra e venda deverá conter o reconhecimento de assinaturas das partes.",
    },
    {
      title: "Passo 4 — Custos e Impostos antes e após a compra",
      children: [
        {
          title: "1º Custos notariais",
          body: [
            "Os custos notariais podem variar de notário para notário. Devem ser pagos pelo promitente comprador ao notário, logo após a celebração do contrato definitivo de compra e venda.",
          ],
        },
        {
          title: "2º IMT (Imposto sobres as transmissões onerosas de imóveis)",
          body: [
            "O cálculo deste imposto depende de diversos fatores, nomeadamente:",
            "Da localização do imóvel (Continente ou Regiões Autónomas). Se o imóvel se destina a habitação própria e permanente ou a habitação secundária. Afetação (Se se trata de um imóvel para habitação, comércio, etc…).",
            "Nota: o cálculo deste imposto incide sobre o maior de dois valores: valor de aquisição ou valor patrimonial tributário, devendo ser liquidado e pago pelo promitente comprador antes da celebração do contrato definitivo de compra e venda.",
          ],
        },
        {
          title: "3º IS (Imposto de Selo)",
          body: [
            "É um imposto que incide sobre todos os atos e contratos, incluindo as transmissões gratuitas de bens. Na aquisição de um imóvel resulta na aplicação da taxa de 0,8% sobre o maior de dois valores: valor de aquisição ou valor patrimonial tributário, devendo ser liquidado e pago pelo promitente comprador antes da celebração do contrato definitivo de compra e venda.",
          ],
        },
        {
          title: "4º IMI (Imposto Municipal sobre Imóveis)",
          body: [
            "Imposto que incide sobre o valor patrimonial tributário dos prédios urbanos e rústicos, situados em território nacional. Este imposto é devido pelo proprietário, usufrutuário ou superficiário do imóvel a 31 de dezembro do ano a que diz respeito, variando consoante o município onde está situado. São aplicadas as seguintes taxas: entre 0,3% e 0,5% para os prédios urbanos, e 0,8% para os prédios rústicos.",
            "Nota: Poderá haver isenção de IMT e IMI em casos específicos previstos na lei.",
          ],
        },
      ],
    },
    {
      title: "Passo 5 — O Contrato Definitivo de Compra e Venda (Escritura)",
      body: [
        "Adicionalmente aos documentos referidos no “Passo 2 – Documentação Legal”, são ainda necessários para a escritura os seguintes documentos:",
      ],
      children: [
        {
          title: "Vendedor",
          bullets: [
            "Documentos de identificação civil e fiscal",
            "Distrate bancário (Caso exista hipoteca registada)",
            "Declaração do exercício do direito de preferência (Se aplicável)",
          ],
        },
        {
          title: "Comprador",
          bullets: [
            "Documentos de identificação civil e fiscal",
            "Comprovativo do pagamento do IMT",
            "Comprovativo do pagamento do IS",
            "Cheque bancário no valor remanescente, à ordem do proprietário",
          ],
        },
      ],
    },
    {
      title: "Passo 6 — Seguros",
      body: [
        "A compra de um imóvel implica a contratação obrigatória de um seguro que cubra o risco de incêndio da casa e, se aplicável, das partes comuns (telhado, escadas, elevadores, garagem, etc…). Caso prefira, pode sempre optar por um seguro multirrisco, apesar de este não ser obrigatório. Este seguro tem uma maior abrangência e pode incluir riscos de danos causados por sismos, inundações, tempestades, roubos ou furtos. Se recorrer a um crédito à habitação, normalmente é exigido pela instituição bancária que sejam contratados alguns seguros. Entre eles, encontra-se o seguro de vida do devedor em que o beneficiário é o banco. Além disso, como o imóvel é habitualmente utilizado como garantia do empréstimo a instituição bancária exige também um seguro multirisco para proteger a habitação de possíveis danos.",
      ],
    },
    {
      title: "Golden Visa",
      body: [
        "O Visto Gold é uma Autorização de Residência para Actividade de Investimento (ARI) e consiste na obtenção de permissão de residência temporária em Portugal, mediante a realização de um investimento em território nacional, de acordo com a legislação em vigor.",
        "A partir de fevereiro de 2020, o Parlamento Português perimitirá que o governo introduza mudanças relativamente aos tipos de investimento para se qualificar para o programa Visto Gold Português. A intenção é favorecer a promoção de investimentos em comunidades locais do interior e nas regiões autónomas dos Açores e da Madeira. Isto significa que o Visto Gold não estará disponível através do investimento em imóveis em grandes cidades como Lisboa e Porto.",
        "As alterações às regras dos Vistos Gold somente entrarão em vigor após a publicação e aprovação da lei, pelo que se está a pensar investir na área metropolitamna de Lisboa para obtenção do Visto Gold, é aconselhável que o faça o mais rápido possível.",
        "Por enquanto, as condições que estão em vigor, são as que apresentamos em baixo.",
      ],
      children: [
        {
          title: "Quem pode requerer?",
          body: [
            "Todos os cidadãos oriundos de Estados não pertencentes nem à União Europeia nem ao Espaço Schengen, que exerçam uma actividade de investimento, pessoalmente ou através de sociedade e que reúnam os requisitos previstos na legislação.",
          ],
        },
        {
          title: "Vantagens",
          bullets: [
            "Entrar em Portugal com dispensa de visto de residência;",
            "Residir e trabalhar em Portugal, podendo manter outra residência noutro país;",
            "Circular livremente pelo espaço Schengen;",
            "Beneficiar de reagrupamento familiar;",
            "Possibilidade de aceder à residência permanente, ao fim de 5 anos;",
            "Possibilidade de obter a nacionalidade portuguesa, ao fim de 6 anos",
          ],
        },
        {
          title: "Como obter o Visto Gold por via do investimento imobiliário?",
          bullets: [
            "A aquisição de bens imóveis de valor igual ou superior a 500 mil euros. O valor deste investimento pode ser reduzido em 20% (400 mil Euros) quando seja efetuado em território de baixa densidade.",
            "A aquisição de bens imóveis construídos há pelo menos 30 anos (ou localizados em área de reabilitação urbana) e realização das respetivas obras de reabilitação, no montante global igual ou superior a 350 mil euros. O valor deste investimento pode ser reduzido em 20% (280 mil Euros) quando seja efetuado em território de baixa densidade.",
          ],
        },
        {
          title: "Reagrupamento Familiar",
          body: [
            "Os titulares de Autorização de Residência para Atividade de Investimento têm direito ao reagrupamento familiar, ao acesso à autorização de residência permanente, bem como à nacionalidade portuguesa, em conformidade com o disposto na legislação em vigor.",
          ],
        },
        {
          title: "Prazos mínimos de Permanência",
          body: [
            "Para efeitos de renovação de autorização de residência, poderá ter de demonstrar ter cumprido um prazo mínimo de permanência em território nacional de 7 dias, seguidos ou interpolados, no 1.º ano e de 14 dias nos subsequentes períodos de dois anos.",
          ],
        },
      ],
    },
    {
      title: "Residentes Não Habituais",
      body: [
        "O Regime Fiscal para Residentes não habituais, consiste num regime fiscal em sede do Imposto sobre o Rendimento das Pessoas Singulares (IRS), que tem por objetivo atrair para Portugal profissionais qualificados em atividades de elevado valor acrescentado e beneficiários de pensões obtidas no estrangeiro.",
        "A partir de fevereiro de 2020, o Parlamento Português permitirá que o Governo introduza mudanças relativamente ao regime de residente não habitual.",
        "Estas mudanças não prejudicarão quem já é residente não habitual, ou seja, quem beneficia da atual isenção de IRS (0%), e quem se inscreva até à entrada em vigor do novo regime continuará a beneficiar desta vantagem até ao fim dos dez anos de duração do incentivo fiscal.",
        "Após a entrada em vigor desta medida, os novos aderentes ao regime de residente não habitual perderão a dupla isenção fiscal, passando a ser tributados a uma taxa de 10% sobre as pensões pagas pelo seu país de origem.",
        "Por enquanto, as condições que estão em vigor, são as que apresentamos em baixo.",
      ],
      children: [
        {
          title: "Vantagens",
          bullets: [
            "A tributação, durante um período de 10 anos, a uma taxa fixa de IRS de 20% sobre os rendimentos do trabalho auferidos em Portugal.",
            "A inexistência de dupla tributação, no caso das pensões e do trabalho dependente e independente auferido no estrangeiro.",
          ],
        },
        {
          title: "Destinatários",
          bullets: [
            "Cidadãos não residentes em Portugal que se disponham a estabelecer domicílio no nosso País, ou que queiram regressar após um período mínimo de ausência de 5 anos (ex. profissionais independentes, reformados e pensionistas, trabalhadores dependentes, emigrantes).",
            "Cidadãos não residentes em Portugal que pretendam fixar-se como residentes temporários, fruto de relações de destacamento (ex. profissionais independentes, trabalhadores dependentes, membros dos órgãos estatutários).",
          ],
        },
        {
          title: "Como obter o estatuto de Residente Não Habitual?",
          bullets: [
            "Ser residente fiscal em Portugal, permanecendo em território português mais de 183 dias (seguidos ou interpolados) ao longo do ano. Esta permanência é comprovável mediante apresentação de escritura de compra de imóvel, ou mediante apresentação de contrato de arrendamento com duração igual ou superior a 6 meses.",
            "Não ter sido enquadrado como residente fiscal em Portugal nos últimos 5 anos prévios à aplicação do regime.",
            "O pedido de inscrição como residente não habitual deverá ser efetuado, por via eletrónica, no Portal das Finanças, posteriormente ao ato da inscrição como residente em território português e até 31 de março, inclusive, do ano seguinte àquele em que se torne residente nesse território.",
          ],
        },
      ],
    },
  ],
  disclaimer: "A INFORMAÇÃO DISPONIBILIZADA NÃO DISPENSA A CONSULTA DA LEGISLAÇÃO APLICÁVEL",
  aboutKicker: "Quem somos",
  aboutTitle: "Lane Exclusive Real Estate",
  about: [
    "Criada em 2008 pela mão dos seus dois sócios fundadores, Martin Lawrenz e Manuel Neto, a Lane - Exclusive Real Estate é uma empresa especializada na prestação de serviços imobiliários.",
    "Somos especialistas no atendimento a clientes nacionais e internacionais, que procuram adquirir imobiliário de luxo em Portugal.",
    "A nossa equipa de consultores pauta-se pelo seu profissionalismo, dedicação e paixão, sempre com o objetivo de oferecer ao cliente um serviço que supere as suas expetativas.",
  ],
  missionLabel: "A nossa missão",
  mission: "Proporcionar aos nossos clientes uma experiência única e tranquila na aquisição do seu novo imóvel.",
  visionLabel: "A nossa visão",
  vision:
    "Sermos reconhecidos como um dos principais players no mercado imobiliário de luxo, assegurando aos nossos clientes um serviço de excelência baseado na confiança e transparência.",
  stats: [
    { value: "Desde 2008", label: "no mercado imobiliário" },
    { value: "+2000", label: "Imóveis de luxo vendidos" },
    { value: "+350", label: "Imóveis em portfólio" },
  ],
  founders: "Martin Lawrenz e Manuel Neto, sócios fundadores. A Lane não publica retratos da equipa.",
  recruitKicker: "Recrutamento",
  recruitTitle: "Venha fazer parte da nossa equipa!",
  recruit: [
    "Na Lane Portugal, acreditamos que o sucesso começa com pessoas excecionais. Se é um(a) profissional com experiência no setor imobiliário e procura um novo desafio, esta pode ser a oportunidade certa para si.",
    "Estamos a reforçar a nossa equipa com Angariadores(as) Imobiliários(as) para atuar nas zonas de Lisboa, Oeiras e Sintra.",
  ],
  recruitSeek: "Procuramos",
  recruitSeekItems: [
    "Profissionais com mínimo 5 anos de experiência na área da mediação imobiliária",
    "Forte orientação para resultados e trabalho por objetivos",
    "Excelente capacidade de comunicação e relacionamento interpessoal",
    "Carta de condução e disponibilidade para deslocações",
    "Espírito empreendedor, organizado e autónomo",
  ],
  recruitOffer: "Oferecemos",
  recruitOfferItems: [
    "Comissões atrativas e plano de progressão",
    "Integração numa marca sólida, com presença no segmento de luxo",
    "Formação contínua e acompanhamento personalizado",
    "Ferramentas e apoio de marketing para potenciar os seus resultados",
    "Ambiente profissional, colaborativo e ambicioso",
  ],
  recruitClose:
    "Se valoriza qualidade, profissionalismo e pretende integrar uma equipa que se destaca no mercado imobiliário de luxo, queremos conhecê-lo(a).",
  recruitSend: "Enviar CV",
  newsKicker: "Newsletter",
  newsTitle: "Subscreva a nossa newsletter",
  newsNote:
    "Este estudo de design não guarda subscrições. Ao enviar, abre-se o seu cliente de email para info@laneportugal.com.",
  newsEmail: "Email",
  newsConsent: "Declaro que li, compreendi e aceito os",
  newsTerms: "Termos e condições",
  newsPrivacy: "Política de Privacidade",
  newsSend: "Enviar",
  newsError: "Indique o email e aceite os termos.",
  newsSubject: "Newsletter — Lane Portugal",
  contactKicker: "Contactos",
  contactTitle: "Como lhe podemos ajudar?",
  contact: [
    "A nossa equipa especializada está pronta para responder a todas as suas necessidades imobiliárias. Seja para comprar, vender, alugar ou investir, estamos aqui para ajudar.",
    "Entre em contato conosco por telefone, e-mail ou preenchendo o formulário abaixo.",
    "Conte com a experiência da Lane Exclusive Real Estate para tornar sua jornada imobiliária bem-sucedida.",
    "Obrigado por nos escolher como sua imobiliária de confiança.",
  ],
  contactWrite: "Entre em contacto",
  contactName: "Nome",
  contactMessage: "Mensagem",
  contactSend: "Enviar",
  addressLabel: "Morada",
  address: ["Rua Afonso Sanches, 25B", "2750-282 Cascais"],
  phoneLabel: "Telefone",
  emailLabel: "Email",
  mapsLabel: "Google Maps",
  footerLocations: "Localizações",
  footerNav: "Navegação",
  footerVisit: "Cascais — Rua Afonso Sanches, 25B",
  built: "feito por dglxss",
  study: "Não afiliado à Lane Exclusive Real Estate. Estudo de design.",
  legal: "LANE Mediação Imobiliária, Lda / AMI 8486",
  newPrice: "Novo preço",
  viewListing: "Ver imóvel na Lane",
  refLabel: "Ref.",
};

const en: Dict = {
  ...pt,
  nav: [
    { href: "#propriedades", label: "Properties" },
    { href: "#premium", label: "Premium" },
    { href: "#empreendimentos", label: "Developments" },
    { href: "#investir", label: "Investing in Portugal" },
    { href: "#empresa", label: "Company" },
    { href: "#contactos", label: "Contacts" },
  ],
  cta: "Search now",
  localeLabel: "Language",
  themeToDark: "Dark theme",
  themeToLight: "Light theme",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  heroKicker: "Lane Exclusive Real Estate",
  heroLine: "The key to your exclusive hideaway",
  heroItalic: "hideaway",
  shortcuts: [
    { href: "/comprar/venda", label: "Buy" },
    { href: "/arrendar/arrendamento", label: "Rent" },
    { href: "/premium", label: "Luxury Properties" },
    { href: "/imoveis-off-market", label: "Off-Market Properties" },
  ],
  offMarketJump: "Off-market brief",
  weekKicker: "Property of the week",
  propertiesKicker: "Selection",
  propertiesTitle: "Featured properties",
  premiumKicker: "Premium",
  premiumTitle: "Luxury houses and mansions in Portugal",
  premiumLead: "Luxury houses and mansions for sale in Portugal.",
  devKicker: "Developments",
  devTitle: "Exclusive developments in Cascais, Lisbon and Setúbal",
  devBody: "The developments list is published on Lane.",
  devLink: "View developments",
  zonesKicker: "Favourite areas",
  zonesTitle: "Discover the properties in our favourite areas!",
  zonesCaption: "White sandy beaches, world-renowned golf courses, excellent cuisine!",
  cascaisKicker: "The coast",
  cascaisTitle: "Living in Cascais",
  cascais: [
    "Cascais offers a unique combination of quality of life, proximity to the sea and quick access to Lisbon. If you are looking to buy a house in Cascais, you will find houses and apartments for sale in residential and premium areas such as Estoril, Quinta da Marinha and Guia.",
    "The municipality stands out for its safety, international schools, green spaces and a sophisticated lifestyle, ideal for living, investing or securing a second home. Choosing the right area is essential, and Lane’s curated approach helps identify the best opportunities in Cascais, tailored to your profile and goals.",
  ],
  offKicker: "Off market",
  offTitle: "Didn’t find what you’re looking for?",
  offBody: [
    "The best property is not always visible at first search — and sometimes the best opportunities are never publicly listed.",
    "Tell us what you’re looking for (location, property type, budget and must-have features), and the Lane team will take care of the rest.",
  ],
  offZone: "Area",
  offType: "Typology",
  offBudget: "Budget",
  offMust: "Must-have",
  offSend: "Send brief",
  offError: "Please complete area, typology, budget and must-haves.",
  offSubject: "Off-market brief — Lane Portugal",
  rivieraKicker: "Investing in Portugal",
  rivieraTitle: "The Portuguese Riviera",
  riviera: [
    "Considered by many as the Portuguese Riviera, the region of west Lisbon, which includes the coastal cities of Cascais and Estoril, is the luxury destination chosen by the portuguese elite and from other countries.",
    "This is one of the most valued areas in Europe, offering stunning landscapes, a rich cultural agenda (exhibitions, food festivals, sports competitions, boating events, music parties, etc.), an immense architectural heritage and a high quality of life.",
    "Those looking to exercise outdoors will be dazzled by the beauty of the seawall between Cascais and São João do Estoril, or the route between the center of Cascais and Guincho.",
    "Year-round mild climate, white sandy beaches and crystal clear waters, one of the best marinas in southern Europe, world-renowned golf courses, excellent cuisine with a wide range of regional products and a range of international educational institutions. These are more than enough reasons that make Cascais and Estoril excellent places to invest.",
  ],
  rivieraCaption: "Cascais and Estoril - The Portuguese Riviera",
  ledgerKicker: "Buyer's Guide",
  ledgerTitle: "Buying a property, step by step",
  ledgerIntro:
    "Have you finally found the house of your dreams? Your new vacation home? Or maybe a new investment property? To guide you through this process, we share with you the 6 steps to take into consideration before and after the purchase.",
  ledger: [
    {
      title: "Step 1 — Obtaining the Tax Identification Number (NIF)",
      body: [
        "In order to acquire a property in Portugal, once this process is subject to the payment of taxes, it´s necessary that you register with the Tax Administration, in order to obtain the respective tax identification number.",
        "The tax identification number is a number destined exclusively for the processing of tax and customs information, and can be requested by any citizen, resident or not in the national territory, at any time.",
        "You can obtain it in any service desk of the Tax and Customs Authority, or at the counters of the citizens stores that make this service available.",
      ],
      children: [
        {
          title: "If you are a European citizen",
          bullets: [
            "Civil identification document or passport",
            "Proof of address in the country of origin (invoice for water, electricity, gas, etc ...)",
          ],
        },
        {
          title: "If you are a citizen of a third country",
          bullets: [
            "Passport",
            "Proof of address in the country of origin (invoice for water, electricity, gas, etc ...)",
            "It is mandatory to have a tax representative (can be any Portuguese citizen or company with head office in Portugal)",
          ],
        },
      ],
    },
    {
      title: "Step 2 — Legal Documents",
      body: [
        "Before starting the process of buying your new property, you must keep in mind all legal documentation regarding the property as well as the legitimacy of the seller. In the list that follows we present the documents to take into consideration:",
      ],
      children: [
        {
          title: "i) Property Tax Document",
          body: [
            "Document issued by the Tax and Customs Authority, which includes, among others, the following data: identification and location of the property, the areas of the property, the tax value of the asset (for tax purposes), information on any existing exemptions, and the owner(s), depending on the situation.",
          ],
        },
        {
          title: "ii) Certificate of the Land Registry (or certificate of content)",
          body: [
            "Document issued by the Land Registry Office which contains information on: the location and composition of the property, the owner(s), about any charges or encumbrances (mortgages, attachments, easements, usufruct, etc ...).",
          ],
        },
        {
          title: "iii) License of Use",
          body: [
            "Document issued by the City Hall where the property is located, which certifies that the property has been inspected and is in the conditions required by law to be inhabited. In case of a building with construction prior to 1951, this document is not mandatory.",
          ],
        },
        {
          title: "iv) Energy certificate",
          body: [
            "Document issued by authorized technicians by ADENE (National Energy Agency), which evaluates the energy efficiency of a property on an A+ (very efficient) to F (inefficient) scale.",
          ],
        },
        {
          title: "v) Technical file of housing",
          body: [
            "Document descriptive of the main technical and functional characteristics of a property. It is mandatory for real estate that has undergone reconstruction, expansion or alteration works after March 30, 2004.",
          ],
        },
        {
          title: "vi) Declaration of non-debt to the condominium",
          body: [
            "If you want to acquire a property that is inserted in a building under a horizontal property, you can request this document to the owner, in order to guarantee that there are no debts to the condominium until that date.",
          ],
        },
      ],
    },
    {
      title: "Step 3 — The Promissory Contract of Purchase and Sale",
      body: [
        "After verifying all legal documentation of the property and legitimacy of the seller, let´s go to the next step: the signing of the promissory contract of purchase and sale. This contract is essential, although not mandatory, to ensure the purchase of your future property. It is a document signed by both parties (buyer and seller) that regulates and safeguards the rights and duties of each until the date of conclusion of the definitive purchase and sale agreement.",
        "The following items should be included in the promissory contract of purchase and sale:",
      ],
      bullets: [
        "Identification of the parties, (full name, marital status, civil identification number, tax identification number and address);",
        "Identification of the property (including the existence of parts related to the property, such as garage and storage room, for example, land registry number, article in the property tax document and the respective license of use (if applicable));",
        "Indication if there are any charges or encumbrances on the property;",
        "Purchase price and method of payment;",
        "Indication of the amount given as initial and down payment (usually between 15% and 20% of the acquisition value);",
        "Indication that the property will be transmitted free of any charges or encumbrances;",
        "Deadline for conclusion of the definitive purchase and sale agreement;",
        "Indication of sanctions to be applied in case the promissory contract of purchase and sale is not fulfilled by any of the parties.",
      ],
      note: "Note: The promissory contract of purchase and sale should contain the parties signature duly recognized.",
    },
    {
      title: "Step 4 — Costs and taxes before and after the purchase",
      children: [
        {
          title: "1º Notary costs",
          body: [
            "The notary costs can vary from notary to notary. Must be paid by the promissory buyer to the notary, after the conclusion of the definitive purchase and sale agreement.",
          ],
        },
        {
          title: "2º IMT (Tax on the onerous transmissions of real estate)",
          body: [
            "The calculation of this tax depends on several factors, namely:",
            "Location of the property (Mainland or Autonomous Regions). If the property is intended for own and permanent housing or secondary housing. Affection (If it is a property for housing, commerce, etc ...).",
            "Note: The calculation of this tax is based on the higher of two values: acquisition value or the tax value of the asset, and must be paid by the promisory buyer before the final purchase and sale agreement.",
          ],
        },
        {
          title: "3rd IS (Stamp Tax)",
          body: [
            "This tax falls on all acts and contracts, including free transfers of assets. The acquisition of a property results in the application of the rate of 0.8% on the higher of two values: acquisition value or the tax value of the asset, and must be paid by the promissory buyer before the final purchase and sale agreement.",
          ],
        },
        {
          title: "4th IMI (Municipal Property Tax)",
          body: [
            "Tax that falls on the tax value of any urban or rural building located in the national territory. This tax is due by the owner, usufructuary or surface owner of the property as of December 31 of the year to which it relates, varying according to the municipality where it is located. The following rates are applied: between 0.3% and 0.5% for urban buildings, and 0.8% for rural buildings.",
            "Note: There may be exemption of IMT and IMI in specific cases provided in the law.",
          ],
        },
      ],
    },
    {
      title: "Step 5 — The definitive purchase and sale agreement (Deed)",
      body: [
        'Additionally to the documents referred to in "Step 2 - Legal Documents", the following documents are also required for the deed:',
      ],
      children: [
        {
          title: "Seller",
          bullets: [
            "Civil and fiscal identification documents",
            "Banking Distract (If there is a mortgage registered)",
            "Declaration of the exercise of preference rights (if applicable)",
          ],
        },
        {
          title: "Buyer",
          bullets: [
            "Civil and fiscal identification documents",
            "Proof of IMT payment",
            "Proof of IS payment",
            "Bank check in the remaining amount, to the owner´s order",
          ],
        },
      ],
    },
    {
      title: "Step 6 — Insurances",
      body: [
        "The purchase of a property implies the obligatory contracting of an insurance that covers the fire risk of the house and, if applicable, the common parts (roof, stairs, elevators, garage, etc ...). If you prefer, you can always opt for multi-risk insurance, although this is not mandatory. This insurance has a wider scope and may include risks of damages caused by earthquakes, floods, storms, robberies or thefts. If you require a mortgage loan, it is usually required by the banking institution that some insurance is contracted. Among them, the life insurance of the debtor in which the beneficiary is the bank. In addition, since the property is usually used as collateral for the loan, the bank also requires multi-risk insurance to protect the property from possible damages.",
      ],
    },
    {
      title: "Golden Visa",
      body: [
        "The Golden Visa is a Residence Permit for Investment Activity (ARI) and consists of obtaining a temporary residence permit in Portugal, by making an investment in the national territory, in accordance with the legislation in force.",
        "As of February 2020, the portuguese Parliament will allow the Goverment to introduce changes regarding the type of investments to qualify for the portuguese Golden Visa Program. The intention is to favor the promotion of investment in local communities in the interior and in the autonomous regions of the Azores an Madeira. This means that Golden Visa will not be available through investment in real estate in major cities like Lisbon and porto.",
        "Changes to the Golden Visa rules will only come into effect after the law is published and approved, so if you are considering in the Lisbon metropoltan area to obtain a Golden visa, it is advisable to do so as soon as possible.",
        "For now, the conditions in force are those shown below.",
      ],
      children: [
        {
          title: "Who can apply?",
          body: [
            "All citizens coming from States not belonging to the European Union or to the Schengen Area, which carry out an investment activity, either personally or through society, and which meet the requirements laid down by law.",
          ],
        },
        {
          title: "Benefits",
          bullets: [
            "To enter Portugal with exemption of residence visa;",
            "To reside and work in Portugal, being able to maintain another residence in another country;",
            "Circulate freely through the Schengen area;",
            "Benefit from family reunification;",
            "Possibility of access to permanent residence, after 5 years;",
            "Possibility of obtaining Portuguese nationality, after 6 years.",
          ],
        },
        {
          title: "How to obtain the Golden Visa through real estate investment?",
          bullets: [
            "Acquisition of real estate with a value equal to 500 thousand euros or more. The value of this investment can be reduced by 20% (400 thousand Euros) when it is carried out in low density territory.",
            "Acquisition of real estate built for at least 30 years (or located in an urban rehabilitation area) and completion of rehabilitation works, totaling at least 350 thousand euros. The value of this investment can be reduced by 20% (280 thousand Euros) when it is carried out in low density territory.",
          ],
        },
        {
          title: "Family Reunification",
          body: [
            "Holders of Golden Residence Permits for Investment Activity have the right to family regrouping, and may gain access to a permanent residence permit, as well as to Portuguese citizenship in accordance to the current legal provisions.",
          ],
        },
        {
          title: "Minimum Permanent Residency Periods",
          body: [
            "For the purposes of renewing a residency permit, you may have to show that you have resided in Portuguese territory for a minimum period of 7 days, either consecutively or non-consecutively, during the first year, and 14 days in subsequent two year periods.",
          ],
        },
      ],
    },
    {
      title: "Non-Habitual Residents",
      body: [
        "The Fiscal Regime for Non-habitual Residents consists of a tax regime based on Personal Income Tax (IRS), which aims to attract qualified professionals to work in Portugal with high added-value activities and beneficiaries of pensions obtained abroad.",
        "As of February 2020, the Portuguese Parliament will aloow the Government to introduce changes regarding the non-habitual resident regime. These changes will not affect those who are already non-habitual residents, that is, those who benefit from the current IRS exemption (0%), and whoever signs up until the new regime comes into force will continue to benefit from this advantage until the end of the ten years of duration on the tax incentive.",
        "After the entry into force of this measure, new adherents to the regime on non-habitual residents will lose the double tax exemption, being taxed at a fixed rate of 10% on pensions paid by their country of origin.",
        "For now, the conditions in force, are those shown below.",
      ],
      children: [
        {
          title: "Benefits",
          bullets: [
            "Taxation, over a period of 10 years, at a fixed income tax rate of 20% on income earned in Portugal.",
            "No double taxation for pension incomes or for employment and self-employment income obtained abroad.",
          ],
        },
        {
          title: "Recipients",
          bullets: [
            "Citizens who are not resident in Portugal and are willing to return home after a minimum period of absence of 5 years (eg independent professionals, pensioners, dependent workers, emigrants).",
            "Citizens not resident in Portugal who wish to establish themselves as temporary residents, as a result of posting relations (eg independent professionals, dependent workers, members of statutory organs).",
          ],
        },
        {
          title: "How to obtain Non-Resident Status?",
          bullets: [
            "To be a tax resident in Portugal, remaining in Portugal more than 183 days (consecutive or non-consecutive) throughout the year. This permanence is verifiable upon presentation of deed of purchase of a property, or upon presentation of a lease of duration of 6 months or more.",
            "Not have been classified as a tax resident in Portugal in the last 5 years prior to the application of the regime.",
            "The application for registration as a non-habitual resident must be made, electronically, at the Tax Office portal, after the registration as a resident in Portuguese territory and until March 31, inclusive, of the year following that in which he becomes a resident in that territory.",
          ],
        },
      ],
    },
  ],
  disclaimer: "THE AVAILABLE INFORMATION DOESN´T EXEMPT FROM CONSULTATION OF THE APPLICABLE LAW",
  aboutKicker: "About us",
  aboutTitle: "Lane Exclusive Real Estate",
  about: [
    "Created in 2008 by its two founding partners, Martin Lawrenz and Manuel Neto, Lane - Exclusive Real Estate is a company specialising in real estate services.",
    "We specialise in serving national and international clients looking to acquire luxury real estate in Portugal.",
    "Our team of consultants is characterised by its professionalism, dedication and passion, always with the aim of offering clients a service that exceeds their expectations.",
  ],
  missionLabel: "Our mission",
  mission: "To provide our clients with a unique and smooth experience when purchasing their new property.",
  visionLabel: "Our vision",
  vision:
    "To be recognised as one of the main players in the luxury property market, guaranteeing our clients a service of excellence based on trust and transparency.",
  stats: [
    { value: "Since 2008", label: "in the Real Estate Market" },
    { value: "+2000", label: "Luxury properties sold" },
    { value: "+350", label: "Property portfolio" },
  ],
  founders: "Martin Lawrenz and Manuel Neto, founding partners. Lane publishes no staff portraits.",
  recruitKicker: "Recruitment",
  recruitTitle: "Come join our team!",
  recruit: [
    "At Lane Portugal, we believe that success starts with exceptional people. If you are a professional with experience in the real estate sector and are looking for a new challenge, this could be the right opportunity for you.",
    "We are strengthening our team with Real Estate Agents to operate in the Lisbon, Oeiras, and Sintra areas.",
  ],
  recruitSeek: "We are looking for",
  recruitSeekItems: [
    "Professionals with a minimum of 5 years of experience in real estate brokerage",
    "Strong results-oriented mindset and goal-driven work approach",
    "Excellent communication and interpersonal skills",
    "Valid driver’s license and availability to travel",
    "Entrepreneurial spirit, organized, and autonomous",
  ],
  recruitOffer: "We offer",
  recruitOfferItems: [
    "Attractive commissions and a clear career progression plan",
    "Integration into a strong brand with a presence in the luxury segment",
    "Continuous training and personalized support",
    "Marketing tools and support to enhance your results",
    "Professional, collaborative, and ambitious work environment",
  ],
  recruitClose:
    "If you value quality, professionalism, and want to join a team that stands out in the luxury real estate market, we want to hear from you.",
  recruitSend: "Send your CV",
  newsKicker: "Newsletter",
  newsTitle: "Subscribe to our newsletter",
  newsNote:
    "This design study does not store subscriptions. Sending opens your email client to info@laneportugal.com.",
  newsEmail: "Email",
  newsConsent: "I declare that I have read, understood and accept the",
  newsTerms: "Terms & Conditions",
  newsPrivacy: "Privacy Policy",
  newsSend: "Send",
  newsError: "Enter your email and accept the terms.",
  newsSubject: "Newsletter — Lane Portugal",
  contactKicker: "Contacts",
  contactTitle: "How can we help you?",
  contact: [
    "Our specialised team is ready to respond to all your real estate needs. Whether you're buying, selling, renting or investing, we're here to help.",
    "Contact us by phone, email or by filling in the form below.",
    "Count on the experience of Lane Exclusive Real Estate to make your property journey a success.",
    "Thank you for choosing us as your trusted estate agency.",
  ],
  contactWrite: "Get in touch",
  contactName: "Name",
  contactMessage: "Message",
  contactSend: "Send",
  addressLabel: "Address",
  phoneLabel: "Phone",
  emailLabel: "Email",
  mapsLabel: "Google Maps",
  footerLocations: "Locations",
  footerNav: "Navigation",
  footerVisit: "Cascais — Rua Afonso Sanches, 25B",
  built: "built by dglxss",
  study: "Not affiliated with Lane Exclusive Real Estate. Design study.",
  legal: "LANE Mediação Imobiliária, Lda / AMI 8486",
  newPrice: "New price",
  viewListing: "View on Lane",
  refLabel: "Ref.",
};

const dictionaries: Record<Locale, Dict> = { pt, en };

export function useDict() {
  const locale = useLocale();
  return dictionaries[locale];
}

export function dictFor(locale: Locale) {
  return dictionaries[locale];
}
