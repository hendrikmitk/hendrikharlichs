import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: [fileURLToPath(new URL('./src/lib/scss', import.meta.url))],
				additionalData: `@use "abstracts/breakpoints" as *; @use "abstracts/mixins" as *;`
			}
		}
	}
});
