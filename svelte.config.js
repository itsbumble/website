import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-static';
import mdsvexConfig from './mdsvex.config.js';
import { mdsvex } from 'mdsvex';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
