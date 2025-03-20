// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://xmartinez.dev',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['svgo']
    }
  },
  devToolbar: {
    enabled: false
  },
});
