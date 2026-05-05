// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";
import node from "@astrojs/node";

const tailwindPlugin =
  /** @type {any} */ (tailwindcss());
// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [vue()],
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindPlugin],
  },
});
