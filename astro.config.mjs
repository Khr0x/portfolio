// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";

const tailwindPlugin =
  /** @type {any} */ (tailwindcss());
// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [tailwindPlugin],
  },
});
