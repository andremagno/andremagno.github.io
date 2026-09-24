import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const imagem = z.object({
  src: z.string(),
  alt: z.string(),
});

// Each selected project gets a home card and an internal page.
// The build fails with a clear message if a required field is missing.
const projetos = defineCollection({
  loader: file("src/data/projetos.json"),
  schema: z.object({
    nome: z.string(),
    subtitulo: z.string(),
    categorias: z.string(),
    resumo: z.string(),
    cliente: z.string(),
    ano: z.string(),
    papel: z.string(),
    duracao: z.string(),
    capa: imagem,
    blocos: z.array(
      z.discriminatedUnion("tipo", [
        z.object({
          tipo: z.literal("texto"),
          titulo: z.string(),
          texto: z.string(),
        }),
        z.object({
          tipo: z.literal("imagem"),
          largura: z.enum(["full", "coluna"]).default("coluna"),
          src: z.string(),
          alt: z.string(),
          legenda: z.string().optional(),
        }),
        // Titled list: pain points, role, trade-offs, features, learnings
        z.object({
          tipo: z.literal("lista"),
          titulo: z.string(),
          intro: z.string().optional(),
          itens: z.array(z.object({ titulo: z.string(), texto: z.string() })).min(1),
        }),
        // Usability test learnings: what the first version did, what testing showed, what changed
        z.object({
          tipo: z.literal("testes"),
          titulo: z.string(),
          intro: z.string().optional(),
          linhas: z.array(z.object({ antes: z.string(), feedback: z.string(), depois: z.string() })).min(1),
        }),
      ]),
    ),
    resultados: z.array(z.object({ valor: z.string(), legenda: z.string() })).default([]),
    // Hidden projects stay in the JSON but get no home card and no page
    oculto: z.boolean().default(false),
  }),
});

// "Also worked with" marquee: client logo thumbnails only, no internal pages
const outros = defineCollection({
  loader: file("src/data/outros.json"),
  schema: imagem,
});

export const collections = { projetos, outros };
