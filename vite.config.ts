import { svelte } from '@sveltejs/vite-plugin-svelte';
import autoprefixer from 'autoprefixer';
import { defineConfig, UserConfig } from 'vite';

const config = <UserConfig>defineConfig({
	plugins: [svelte()],
	base: '/svelte-todo-app/',
	server: {
		host: 'localhost',
		port: 3052
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "./src/styles/global.scss" as *;`
			}
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}
});

export default config;
