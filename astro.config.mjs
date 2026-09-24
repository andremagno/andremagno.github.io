// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://andremagno.github.io",
  // Links from the old portfolio keep working
  redirects: {
    "/meunegocio": "/projects/iti-meu-negocio/",
    // Case URLs follow company-product; the first published URL keeps working
    "/projects/iti": "/projects/iti-meu-negocio/",
    "/vivovaloriza": "/projects/vivo-valoriza/",
  },
});
