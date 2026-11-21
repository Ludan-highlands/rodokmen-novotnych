import { defineConfig } from 'astro/config';

const base = process.env.RODOKMEN_BASE ?? '/rodokmen-novotnych';
const prefix = base.replace(/\/$/, '');

export default defineConfig({
  site: 'https://ludan-highlands.github.io',
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: {
    '/osoba/dorota-certikova/': `${prefix}/osoba/dorota-hertikova/`,
    '/rodina/jakub-novotny-a-dorota-certikova/': `${prefix}/rodina/jakub-novotny-a-dorota-hertikova/`,
  },
});
