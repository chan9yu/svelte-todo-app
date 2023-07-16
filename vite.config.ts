import { svelte } from '@sveltejs/vite-plugin-svelte';
import autoprefixer from 'autoprefixer';
import { defineConfig, UserConfig } from 'vite';

const config = <UserConfig>defineConfig({
	plugins: [svelte()],
	base: '/svelte-todo-app/',
	server: {
		host: 'localhost',
		port: 3040
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/index.scss";`
			}
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}
});

export default config;
