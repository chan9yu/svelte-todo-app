import { svelte } from '@sveltejs/vite-plugin-svelte';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig, UserConfig } from 'vite';

const pathSrc = path.resolve(__dirname, './src');

const config = <UserConfig>defineConfig({
	plugins: [svelte()],
	base: '/svelte-todo-app/',
	server: {
		host: 'localhost',
		port: 3050
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "${pathSrc}/styles/global.scss" as *;`
			}
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}
});

export default config;
