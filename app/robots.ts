import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cliente/", "/wp-admin/"],
    },
    sitemap: "https://webfixsoluciones.net/sitemap.xml",
  };
}
