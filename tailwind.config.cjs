/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app.html",'./src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {},
		screens: {
			sm: '0px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '2200px',
			'4xl': '3400px'
		}
	},
	plugins: []
};
