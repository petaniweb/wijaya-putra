import type { Config } from "tailwindcss";

const config: Config = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('../assets/images/dummy-hero.jpg')",
			},
			colors: {
				primary: "#216CA9",
			},
			padding: {
				// sm //
				sectionpxsm: "22px",
				// lg //
				sectionpxlg: "160px",
				// 2xl //
				sectionpx2xl: "200px",
			},
		},
	},
	plugins: [],
};
export default config;
