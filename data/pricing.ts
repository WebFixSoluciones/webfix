export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  description: string;
  monthlyPrice: number;
  annualPriceMonthly: number;
  originalPrice?: number;
  whmcsUrl: string;
  features: string[];
  specs: {
    websites: string;
    storage: string;
    ram: string;
    bandwidth: string;
    cpanel: boolean;
    ssl: boolean;
    backups: string;
    emails: string;
    litespeed: boolean;
    freeDomain: boolean;
  };
}

export const WORDPRESS_PLANS: PricingPlan[] = [
  {
    id: "wordpress-starter",
    name: "WP Starter",
    description: "Ideal para blogs personales, páginas de presentación o proyectos en crecimiento.",
    monthlyPrice: 4.50,
    annualPriceMonthly: 3.75,
    originalPrice: 7.50,
    whmcsUrl: "https://webfixsoluciones.net/cliente/store/hosting-wordpress/wordpress-starter",
    features: [
      "1 Sitio Web",
      "15 GB Almacenamiento NVMe",
      "Tráfico Mensual Ilimitado",
      "1.5 GB RAM Dedicada / 1 vCPU",
      "Servidor Web LiteSpeed + LSCache",
      "Certificado SSL Gratis Ilimitado",
      "Cuentas de Correo Corporativo (5)",
      "Panel de Control cPanel en Español",
      "Instalador WordPress en 1 Clic",
      "Protección Antimalware Imunify360",
      "Copias de Seguridad Semanales"
    ],
    specs: {
      websites: "1 Sitio",
      storage: "15 GB NVMe",
      ram: "1.5 GB",
      bandwidth: "Ilimitado",
      cpanel: true,
      ssl: true,
      backups: "Semanales",
      emails: "5 Cuentas",
      litespeed: true,
      freeDomain: false
    }
  },
  {
    id: "wp-pro",
    name: "WP Pro",
    badge: "MÁS POPULAR",
    popular: true,
    description: "La mejor opción para negocios, profesionales y tiendas WooCommerce con alto tráfico.",
    monthlyPrice: 7.99,
    annualPriceMonthly: 6.50,
    originalPrice: 12.99,
    whmcsUrl: "https://webfixsoluciones.net/cliente/store/hosting-wordpress/wp-pro",
    features: [
      "Hasta 5 Sitios Web",
      "50 GB Almacenamiento NVMe Ultra-Rápido",
      "Dominio .COM Gratis (Plan Anual)",
      "3 GB RAM Dedicada / 2 vCPU",
      "LiteSpeed Enterprise + HTTP/3 Quic",
      "Staging WordPress (Entorno de Pruebas)",
      "Cuentas de Correo Ilimitadas",
      "Panel cPanel + Terminal WP-CLI",
      "Copias de Seguridad Diarias Automáticas",
      "Seguridad Avanzada Imunify360 + WAF",
      "Soporte Prioritario 24/7"
    ],
    specs: {
      websites: "5 Sitios",
      storage: "50 GB NVMe",
      ram: "3 GB",
      bandwidth: "Ilimitado",
      cpanel: true,
      ssl: true,
      backups: "Diarias",
      emails: "Ilimitadas",
      litespeed: true,
      freeDomain: true
    }
  },
  {
    id: "wp-expert",
    name: "WP Expert",
    badge: "MÁXIMA POTENCIA",
    description: "Para empresas, agencias y plataformas eCommerce que demandan máxima potencia y recursos.",
    monthlyPrice: 14.99,
    annualPriceMonthly: 12.00,
    originalPrice: 24.00,
    whmcsUrl: "https://webfixsoluciones.net/cliente/store/hosting-wordpress/wp-expert",
    features: [
      "Sitios Web Ilimitados",
      "120 GB Almacenamiento NVMe RAID 10",
      "Dominio .COM Gratis (Plan Anual)",
      "6 GB RAM Dedicada / 4 vCPU",
      "LiteSpeed Enterprise con Caché Redis/Memcached",
      "Staging & Clonación de Sitios en 1 Clic",
      "Cuentas de Correo Ilimitadas con Anti-Spam",
      "cPanel + Acceso SSH / WP-CLI / Git",
      "Backups JetBackup Diarios con Restauración en 1 Clic",
      "Protección DDoS Avanzada Cloudflare",
      "IP Dedicada Disponible"
    ],
    specs: {
      websites: "Ilimitados",
      storage: "120 GB NVMe",
      ram: "6 GB",
      bandwidth: "Ilimitado",
      cpanel: true,
      ssl: true,
      backups: "Diarias + JetBackup",
      emails: "Ilimitadas",
      litespeed: true,
      freeDomain: true
    }
  }
];

export const EMAIL_PLANS = [
  {
    id: "email-starter",
    name: "Email Starter",
    description: "Ideal para emprendedores y profesionales que necesitan presencia corporativa con su propio dominio.",
    monthlyPrice: 3.50,
    annualPriceMonthly: 2.92,
    whmcsUrl: "https://webfixsoluciones.net/cliente/store/email-empresarial/email-starter",
    features: [
      "Hasta 5 Cuentas de Correo",
      "10 GB Espacio Total para Correo",
      "Webmail Profesional (Roundcube / Horde)",
      "Compatible con Outlook, Thunderbird, iOS y Android",
      "Filtros Antispam y Antivirus Imunify",
      "Certificado SSL/TLS para Envío Seguro",
      "Configuración SPF, DKIM y DMARC garantizada",
      "Soporte 24/7"
    ]
  },
  {
    id: "email-pymes",
    name: "Email PYMES",
    badge: "RECOMENDADO EMPRESAS",
    popular: true,
    description: "Diseñado para equipos de trabajo que requieren mayor capacidad y buzones dedicados.",
    monthlyPrice: 6.90,
    annualPriceMonthly: 5.50,
    whmcsUrl: "https://webfixsoluciones.net/cliente/store/email-empresarial/email-pymes",
    features: [
      "Hasta 25 Cuentas de Correo",
      "50 GB Espacio Total para Correo",
      "Webmail Seguro con Calendario y Contactos",
      "Soporte IMAP, POP3 y SMTP Seguro",
      "Filtros Antispam Premium con Inteligencia Artificial",
      "Panel de Administración de Cuentas Fácil",
      "Garantía de Entrega en Bandeja de Entrada (No Spam)",
      "Soporte Prioritario 24/7"
    ]
  }
];

export const RESELLER_PLANS = [
  {
    id: "reseller-starter",
    name: "Reseller Starter",
    description: "Comienza tu propia empresa de hosting web con marca blanca y panel WHM.",
    monthlyPrice: 19.99,
    annualPriceMonthly: 16.50,
    whmcsUrl: "https://webfixsoluciones.net/cliente/store/hosting-reseller/reseller-starter",
    features: [
      "25 Cuentas cPanel Independientes",
      "50 GB Almacenamiento NVMe",
      "Tráfico Mensual Ilimitado",
      "Panel WHM (WebHost Manager) en Español",
      "Marca Blanca 100% (Tus propios Nameservers)",
      "Servidores LiteSpeed + CloudLinux OS",
      "Certificados SSL Gratis para todos tus clientes",
      "Copias de Seguridad Automatizadas",
      "Migración Gratuita de tus Clientes"
    ]
  },
  {
    id: "reseller-pro",
    name: "Reseller Pro",
    badge: "MÁS POPULAR",
    popular: true,
    description: "Para agencias digitales y diseñadores web con múltiples clientes.",
    monthlyPrice: 34.99,
    annualPriceMonthly: 28.90,
    whmcsUrl: "https://webfixsoluciones.net/cliente/store/hosting-reseller/reseller-pro",
    features: [
      "60 Cuentas cPanel Independientes",
      "120 GB Almacenamiento NVMe",
      "Tráfico Mensual Ilimitado",
      "Panel WHM Completo con Límites Personalizables",
      "Nameservers Privados (ns1.tudominio.com)",
      "LiteSpeed Web Server + LSCache",
      "Imunify360 en todas las cuentas cPanel",
      "Backups JetBackup Diarios",
      "Soporte Técnico de Nivel 2"
    ]
  }
];

export const FREE_HOSTING_PLAN = {
  id: "hosting-gratis",
  name: "Free Hosting Tier",
  description: "Plan de hosting gratuito para proyectos iniciales, estudiantes o pruebas sin costo.",
  price: 0,
  whmcsUrl: "https://webfixsoluciones.net/cliente/store/hosting-wordpress/hosting-gratis",
  features: [
    "1 Sitio Web",
    "500 MB Almacenamiento SSD",
    "5 GB Transferencia Mensual",
    "1 Cuenta de Correo Corporativo",
    "Panel de Control cPanel",
    "Certificado SSL Gratis",
    "Instalador de WordPress",
    "Protección Antivirus Básica",
    "Sin Anuncios Obligatorios"
  ]
};
