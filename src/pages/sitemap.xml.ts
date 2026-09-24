import type { APIRoute } from "astro";
import { getProjetos } from "../lib/colecoes";

// Sitemap for search engines: home, About and every visible case study
export const GET: APIRoute = async ({ site }) => {
  const projetos = await getProjetos();
  const caminhos = ["/", "/about/", ...projetos.map(({ id }) => `/projects/${id}/`)];
  const urls = caminhos.map((caminho) => `  <url><loc>${new URL(caminho, site)}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
