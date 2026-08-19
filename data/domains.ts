export interface DomainTld {
  extension: string;
  priceAnnual: number;
  renewalPrice: number;
  transferPrice: number;
  popular?: boolean;
  featured?: boolean;
  category: "popular" | "business" | "tech" | "local";
  description: string;
}

export const DOMAIN_TLDS: DomainTld[] = [
  {
    extension: ".com",
    priceAnnual: 14.50,
    renewalPrice: 16.50,
    transferPrice: 14.50,
    popular: true,
    featured: true,
    category: "popular",
    description: "La extensión más reconocida y confiable a nivel mundial para cualquier negocio."
  },
  {
    extension: ".net",
    priceAnnual: 15.00,
    renewalPrice: 17.50,
    transferPrice: 15.00,
    popular: true,
    featured: true,
    category: "popular",
    description: "Ideal para empresas tecnológicas, redes, servicios y plataformas digitales."
  },
  {
    extension: ".org",
    priceAnnual: 15.00,
    renewalPrice: 17.50,
    transferPrice: 15.00,
    featured: true,
    category: "popular",
    description: "Extensión de prestigio para organizaciones, proyectos comunitarios y fundaciones."
  },
  {
    extension: ".ec",
    priceAnnual: 45.00,
    renewalPrice: 48.00,
    transferPrice: 45.00,
    popular: true,
    featured: true,
    category: "local",
    description: "El dominio oficial de Ecuador para posicionar tu marca localmente."
  },
  {
    extension: ".com.ec",
    priceAnnual: 35.00,
    renewalPrice: 38.00,
    transferPrice: 35.00,
    category: "local",
    description: "Ideal para empresas y comercios legalmente constituidos en Ecuador."
  },
  {
    extension: ".shop",
    priceAnnual: 17.00,
    renewalPrice: 38.00,
    transferPrice: 17.00,
    featured: true,
    category: "business",
    description: "La extensión perfecta para tu tienda online o eCommerce."
  },
  {
    extension: ".pro",
    priceAnnual: 26.00,
    renewalPrice: 28.00,
    transferPrice: 26.00,
    category: "business",
    description: "Para consultores, profesionales independientes y expertos."
  },
  {
    extension: ".io",
    priceAnnual: 39.00,
    renewalPrice: 44.00,
    transferPrice: 39.00,
    category: "tech",
    description: "La extensión preferida por startups, desarrolladores y SaaS."
  },
  {
    extension: ".dev",
    priceAnnual: 18.00,
    renewalPrice: 20.00,
    transferPrice: 18.00,
    category: "tech",
    description: "Dominio seguro con HTTPS forzado para desarrolladores de software."
  }
];

export const DOMAIN_FEATURES = [
  {
    title: "Protección Whois Gratis",
    description: "Mantenemos tus datos personales, teléfono y dirección privados ante el registro público sin costo extra."
  },
  {
    title: "Panel DNS Avanzado",
    description: "Gestiona registros A, CNAME, MX, TXT y SPF en tiempo real con propagación ultra-rápida."
  },
  {
    title: "Bloqueo de Transferencia",
    description: "Protección antirobo para evitar transferencias no autorizadas de tus nombres de dominio."
  },
  {
    title: "Redirección Web y de Correo",
    description: "Redirige fácilmente las visitas o correos de tu dominio hacia cualquier otra URL o buzón."
  }
];
