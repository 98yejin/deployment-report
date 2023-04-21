import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: 3000,
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		  },
	}
};

export default config;
