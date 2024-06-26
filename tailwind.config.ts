import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'purple-dimata': '#625FFB',
				'light-gray-dimata': '#F1F1F1',
				'dark-gray-dimata': '#707070',
				'orange-dimata': '#E2992B',
				'black-dimata': '#303030',
				'cream-dimata': '#FFF3E1',
				'red-dimata': '#BD3E3E',
			},
		},
	},
	plugins: [],
};
export default config;
