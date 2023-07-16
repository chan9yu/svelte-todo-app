import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: vitePreprocess(),
	settings: {
		svelte: {
			ignoreWarnings: [
				'@typescript-eslint/no-unsafe-assignment',
				'@typescript-eslint/no-unsafe-member-access'
			],
			compileOptions: {}
		}
	}
};
