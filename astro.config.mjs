import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';
const { STORYBLOK_DELIVERY_API_TOKEN, STORYBLOK_API_BASE_URL } = loadEnv(
	import.meta.env.MODE,
	process.cwd(),
	'',
);

export default defineConfig({
	integrations: [
		storyblok({
			accessToken: STORYBLOK_DELIVERY_API_TOKEN,
			apiOptions: {
				/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js */
				region: 'eu',
				/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
				endpoint: STORYBLOK_API_BASE_URL
					? `${new URL(STORYBLOK_API_BASE_URL).origin}/v2`
					: undefined,
			},
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
