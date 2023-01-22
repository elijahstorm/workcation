import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			hostineSite: 'data',
			precompress: false,
			fallback: 'index.html'
		}),
		paths: {
			base: '/workcation'
		}
	}
}

export default config
