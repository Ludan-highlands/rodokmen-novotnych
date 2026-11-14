import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ludan-highlands.github.io',
  base: process.env.RODOKMEN_BASE ?? '/rodokmen-novotnych',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
