import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$config: 'src/lib/config.ts',
			$data: 'src/lib/data',
			$store: 'src/lib/store.ts',
			$types: 'src/lib/types',
			$utils: 'src/lib/utils'
		}
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
