export interface FAQItem {
  question: string;
  answer: string;
  category?: "general" | "wordpress" | "domains" | "reseller" | "email";
}

export const MAIN_FAQS: FAQItem[] = [
  {
    question: "¿Qué es el Hosting con LiteSpeed y por qué es más rápido?",
    answer: "LiteSpeed Web Server es una alternativa de alto rendimiento a Apache. Procesa las solicitudes con una arquitectura dirigida por eventos y cuenta con el plugin LSCache a nivel de servidor, lo que permite que tu sitio WordPress cargue hasta 10 veces más rápido y reduzca el TTFB (Time to First Byte) a menos de 50ms.",
    category: "general"
  },
  {
    question: "¿Incluyen migración gratuita desde otro proveedor?",
    answer: "¡Sí, totalmente gratis! Nuestro equipo técnico se encarga de migrar tu sitio web, bases de datos y cuentas de correo desde tu hosting anterior sin cortes de servicio ni pérdidas de información.",
    category: "general"
  },
  {
    question: "¿Cómo funciona el dominio gratis incluido en los planes?",
    answer: "Al contratar cualquier plan de Hosting WordPress (WP Pro o WP Expert) con periodicidad anual o superior, obtienes el registro de un dominio .COM completamente gratis durante el primer año.",
    category: "domains"
  },
  {
    question: "¿Qué panel de control proporcionan para gestionar mi cuenta?",
    answer: "Todos nuestros planes de Hosting y Correo incluyen la última versión de cPanel en español, el panel de control estándar de la industria, con instalador Softaculous en 1 clic para WordPress, WooCommerce, Joomla y más de 400 scripts.",
    category: "general"
  },
  {
    question: "¿Cómo protegen mi sitio web contra ataques y virus?",
    answer: "Contamos con la suite de seguridad integral Imunify360 con Inteligencia Artificial, Firewall Web (WAF) proactivo, detección y limpieza automática de malware en tiempo real, y protección contra ataques de fuerza bruta y DDoS.",
    category: "general"
  },
  {
    question: "¿Emiten facturas autorizadas por el SRI en Ecuador?",
    answer: "Sí, todos nuestros precios incluyen o desglosan la facturación electrónica legal autorizada por el Servicio de Rentas Internas (SRI) de Ecuador para empresas, personas naturales y RUC.",
    category: "general"
  },
  {
    question: "¿Cuáles son los métodos de pago disponibles?",
    answer: "Aceptamos pagos mediante Transferencia Bancaria Directa (Banco Pichincha, Banco Guayaquil, Produbanco, Banco del Pacífico), Tarjetas de Crédito y Débito (Visa, Mastercard, American Express, Discover), PayPal y pasarelas seguras en línea.",
    category: "general"
  },
  {
    question: "¿Disponen de copias de seguridad automáticas?",
    answer: "Sí. Realizamos copias de seguridad diarias y semanales mediante el sistema JetBackup en servidores de almacenamiento externos redundantes. Puedes restaurar archivos, bases de datos o tu cuenta completa en cualquier momento con un solo clic.",
    category: "wordpress"
  }
];
