import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webfixsoluciones.net";
  const now = new Date();

  const routes = [
    "",
    "/hosting-wordpress",
    "/hosting-reseller",
    "/correos-empresarial",
    "/registro-de-dominios",
    "/hosting-gratis",
    "/servidor-dedicado",
    "/hosting-en-ecuador",
    "/diseno-de-paginas-web",
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
