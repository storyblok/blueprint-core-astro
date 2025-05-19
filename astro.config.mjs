import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';
const { STORYBLOK_DELIVERY_API_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: STORYBLOK_DELIVERY_API_TOKEN,
      components: {
        page: 'storyblok/Page',
        grid: 'storyblok/Grid',
        feature: 'storyblok/Feature',
        teaser: 'storyblok/Teaser',
      },
    }),
  ],
  output: 'server',
  vite: {
    plugins: [mkcert()],
  },
});
