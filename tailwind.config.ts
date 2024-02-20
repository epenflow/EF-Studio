import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		debugScreens: {
			style: {
				backgroundColor: '#00FF00',
				color: 'black',
				fontSize: '20px',
				// ...
			},
		},
		extend: {
			colors: {
				default: {
					100: '#ffff',
					200: '#f2f2f2',
					300: '#f5f5f5',
					400: '#D0D0D0',
					//blue
					500: '#007AF',
					600: '#c9e3ff',
				},
			},
		},
	},
	plugins: [
		require('tailwindcss-debug-screens'),
		/** @type {import('tailwindcss/types/config').PluginCreator} */
		({ addUtilities }: { addUtilities: any }) => {
			addUtilities({
				'.border-default': {
					border: '1px solid #d0d0d0;',
				},
				'.shadow-default-100': {
					boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
				},
				'.shadow-default-200': {
					boxShadow:
						'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
				},
			});
		},
	],
};
export default config;
