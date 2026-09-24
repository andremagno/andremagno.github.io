import { getCollection } from "astro:content";
import projetosJson from "../data/projetos.json";
import outrosJson from "../data/outros.json";

// Collections don't guarantee order, so entries follow their position in the JSON file.
function naOrdemDoArquivo<T extends { id: string }>(entradas: T[], arquivo: { id: string }[]) {
  const posicao = new Map(arquivo.map((item, indice) => [item.id, indice]));
  return entradas.sort((a, b) => (posicao.get(a.id) ?? 0) - (posicao.get(b.id) ?? 0));
}

export async function getProjetos() {
  const visiveis = await getCollection("projetos", ({ data }) => !data.oculto);
  return naOrdemDoArquivo(visiveis, projetosJson);
}

export async function getOutros() {
  return naOrdemDoArquivo(await getCollection("outros"), outrosJson);
}
