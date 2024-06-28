import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://xmartinez.dev',
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  devToolbar: {
    enabled: false
  },
});
