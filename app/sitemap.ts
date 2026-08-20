import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webfixsoluciones.net";
  const now = new Date();

  const routes = [
    "",
    // Dominios
    "/registro-de-dominios",
    "/whois",
    "/transferencia-de-dominios",
    "/subasta-de-dominios",
    // Hosting
    "/hosting-wordpress",
    "/hosting-gratis",
    "/hosting-vps",
    "/hosting-reseller",
    "/hosting-moodle",
    "/hosting-cloud",
    "/hosting-en-ecuador",
    "/servidor-dedicado",
    // Correos
    "/correos-empresarial",
    // Diseño & Soluciones
    "/diseno-de-paginas-web",
    "/diseno-ecommerce",
    "/desarrollo-de-software",
    "/desarrollo-de-apps",
    "/aulas-virtuales",
    "/crm-whatsapp",
    // Legal
    "/terminos-y-condiciones",
    "/politica-de-uso-aceptable",
    "/terminos-y-condiciones/formulario-de-aceptacion",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/hosting") ? 0.9 : 0.8,
  }));
}
